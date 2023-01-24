- https://www.sqlite.org/lang_altertable.html
# Overview
- SQLite support tập hợp 1 số lệnh alter table.
- Alter table dùng để:
    - Rename table
    - Rename column
    - Add/ drop column
- Chỗ này có cái visualize hay phết mà ko chụp hết được. Anh em vào đây bấm `show` mà xem thử: [Link](https://www.sqlite.org/lang_altertable.html)
# Alter table rename
- `RENAME TO` dùng để đổi tên table; không dùng được giữa các db khác nhau, chỉ dùng trong 1 db thôi
    - Trường hợp bảng rename có trigger hoặc index, thì trigger, index vẫn được đính vào bảng sau khi rename xong.
- ** Compatibility note **: phiên bản 3.25, 3.26 nên dùng config PRAGMA legacy_alter_table=ON để hoạt động ổn định (liên quan tới việc move attached trigger, indices).
- Từ bản 3.25 trở đi, table được rename thì trigger và view liên quan cũng sẽ được đổi tên cùng.
- Đại khái nói về config PRAGMA, nếu on/off với các version khác nhau thì hiệu ứng thế nào.
- // TODO: đọc thêm về PRAGMA và quay lại đây update

# Alter table rename column
- `RENAME COLUMN TO` dùng để đổi tên cột. Giống SQL thường
# Alter table add column
# Alter table drop column
# Disable error checking using PRAGMA writable_schema=ON
# Making other kinds of table schema changes
# Why alter table is such a problem for SQLite
