> SQLite And 8+3 Filenames
- Config mặc định của SQLite giả định rằng hệ thống support file có tên dài (long filenames)
- SQLite không yêu cầu naming convention nào cho db file cả. Có thể có bất cứ đuôi nào, hoặc không có đuôi cũng vẫn ok.
- Các file cần để bổ quả sung cho quá trình rollback, write-a-headlog hoặc tmp process thì thường sẽ có thêm quả đuôi gì đó.
    - VD:
        - DB: app.db
        - Rollback file: app.db-journal
        - Write ahead log: app.db-wal
- Ở các hệ thống dính rule 8+3 thì các file bổ trợ thường sẽ không theo quy tắc trên (để tiết kiệm size)

## Changing file system
- Tốt nhất là nên upgrade lên system hỗ trợ long file name. Short file name dễ gây corrupted database.

## Adjusting SQLite to Use 8+3 Filenames
- Nếu bắt buộc phải dùng 8+3 filenames system thì đây là 1 số cách:
    - Compile thư viện SQLite sử dụng option SQLITE_ENABLE_8_3_NAMES=1 hoặc SQLITE_ENABLE_8_3_NAMES=2. Mặc định thì SQLIte chưa support 8+3 filename mà phải thêm options, vì 8+3 nó không phổ biến và cũng không an toàn.
        - SQLITE_ENABLE_8_3_NAMES=1: mặc định ko bật chế độ 8+3, mà mỗi connection khởi tạo lên (khi attach db) phải bật riêng biệt
        - SQLITE_ENABLE_8_3_NAMES=2: mặc định bật chế độ 8+3, connection khởi tạo mặc định sẽ support 8+3 luôn.
        - Khi đã bật lên thì chú ý db file phải theo rule 8+3 format:
            - Tên file 1 -> 8 kí tự
            - Extension 1 -> 3 kí tự
            - Không được bỏ trống extension.
        - Khi bật chế độ này, file name sẽ tự động được giản lược đi
            - app.db-journal -> app.nal
            - app.db-wal -> app.wal
            - app.db-shm -> app.shm

## Database corruption warning
- Nếu db file đã được sử dụng 8+3 naming thì nó hãy luôn được access theo kiểu này trong các connection.
    - Vì các file bổ trợ (rollback journal, wal) cũng theo rồi nên nếu mở nhiều connection với nhiều type quá thì lúc có sự cố sẽ không lấy lại được dữ liệu
    - Dùng lẫn lộn connection 8+3 và long filename thì giống như bạn đang delete hot journal (xoá file support rollback) vậy.
