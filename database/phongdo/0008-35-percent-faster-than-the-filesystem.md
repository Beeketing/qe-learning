- https://www.sqlite.org/fasterthanfs.html#approx

# Summary
- SQLite đọc và ghi các blobs nhỏ nhanh hơn 35% so với các file tương tự trên hệ thống sử dụng `fread()` và `fwrite()`.
- Hơn nữa, một database SQLite chứa 10-kb blobs sử dụng ít hơn 20% đĩa lưu ở các file riêng biệt (?)
- Lí do nhanh hơn:
    - SQLite db sử dụng system call `open()` và `close()` một lần duy nhất.
    - Lưu ở các file riêng biệt thì dùng system call `open()` và `close()` mỗi lần cho mỗi file
    - Như vậy có thể thấy cost gọi hàm `open()` và `close()` còn lớn hơn cả việc dùng CSDL (?) -> giảm số lần gọi hàm này là tiết kiệm cũng khá khá đấy.

## Hãy cẩn thận (Caveats)
- 35% là con số xấp xỉ. Tuỳ vào nhiều điều kiện khác nhau: phần cứng, phần mềm, phần hơi mềm mềm,...
- Có nhiều ông bảo: trên máy tôi, SQLite chậm hơn
- Dù thế nào, chúng tôi (SQLite cũng éo tin)
- Bài viết này để bác bỏ giả định rằng relational databases luôn phải chậm hơn direct system I/O

## Related studies
- Đoạn này lấy thêm vài ví dụ cũng chứng minh việc relational databases đọc nhanh hơn direct system I/O
    - https://www.microsoft.com/en-us/research/publication/to-blob-or-not-to-blob-large-object-storage-in-a-database-or-a-filesystem/
    - https://www.sqlite.org/intern-v-extern-blob.html

# How these measurements are made
- Đội này measure dựa trên một file gọi là `kvtest.c` nằm trong project SQLite luôn
- Câu lệnh thì vào docs mà xem
- Đại khái tạo ra 1 cái db và so với cách cấu trúc file thông thường thì tạo ra db có vẻ nhỏ hơn 20%
    - File thường:  1,228,800,000 bytes
    - SQLite:       1,024,512,000 bytes
- Thử dùng trick tạo ra nhiều folder con cũng thấy ko hơn đáng kể lắm về dung lượng