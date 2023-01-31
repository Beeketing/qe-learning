- https://www.sqlite.org/asyncvfs.html
# An Asynchronous I/O Module for SQLite
- Lưu ý: WAL mode với PRAGMA synchronous set về NORNAL để tránh việc gọi fsync() trong quá trình transaction commit, và chỉ gọi fsync khi quá trình checkpoint diễn ra thôi.
- WAL mode gần như không dùng nữa nên module này cũng đắp chiếu rồi.
- Code của module này vẫn còn, tuy nhiên không còn maintain nữa -> anh em đọc cho vui thôi nhé :))
---
- Thông thường, SQLite ghi ra database file, và nó sẽ chờ cho tới khi write operation hoàn thành thì mới trả quyền điều khiển về cho ứng dụng.
- Vì việc ghi file chậm hơn CPU bound operations -> call có thể bị bottle neck.
    - Async I/O backend là 1 extension giúp SQLite thực hiện write request sử dụng các thread riêng biệt chạy ở background
    - Việc này dù không làm giảm resource hệ thống, nhưng nó giúp SQLite trả quyền kiểm soát cho caller

## Functionality
- Với async I/O, write request được handle bằng 1 thread riêng biệt chạy dưới background.
    - Việc này nghĩa là thread init db write ko cần chờ quá trình I/O thực tế diễn ra.
    - Dùng async khiến việc ghi có cảm giác nhanh hơn.
- Dùng async I/O thì có trade off là mất đi tính Durable (trong ACID).
    - Cụ thể thì vì dùng 1 thread riêng biệt -> khi SQLite trả quyền cho caller, thực tế có thể I/O operation thực tế chưa được hoàn thành; lúc này mà system bị crash/ mất điện thì mất dữ liệu luôn (dù có thể application đã báo là thành công (do được trả quyền điều khiển))
    - Dù mất đi Durability nhưng vẫn còn 3 thành phần còn lại trong ACID: Atomic, Consistency, Isolated. Có rất nhiều ứng dụng cũng hoạt động mà không có tính Durablity đó thôi.

## How it work
- Async I/O hoạt động bằng cách tạo SQLite VFS object bằng function sqlite3_vfs_register().
- Khi file được mở thông qua VFS, lúc ghi file thì thực tế file chưa được ghi vào disk đâu. Đang được ghi ở "write-queue" được handle ở background thread.
    - File mở bằng VFS được đọc bằng cả ở disk và cả ở write-queue

## Limitation
- Vì write ra 1 cái wait-queue phụ nên sẽ tốn mem. Nếu nhiều quá dễ bị OOM
    - Hiện thì cũng có 1 cái module để check xem resource có đủ để nhận thêm ko. nếu không thì ko nhận nữa.

## Locking & concurrency
