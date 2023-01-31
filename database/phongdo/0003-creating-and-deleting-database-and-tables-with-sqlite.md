## Database
- List database connection
```
.database
```
- Attach thêm database vào current connection
```
ATTACH DATABASE "test.db" as test
```

## Tables
- Tạo table
```sqlite3
CREATE TABLE student (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INTEGER,
    student_email TEXT NOT NULL,
    class TEXT
);
```
### Data types
- https://www.sqlite.org/datatypes.html
- SQLite là typeless, nghĩa là có thể lưu bất kì data type nào vào column nào, dù có khai báo kiểu dữ liệu đi nữa.
    - Đây là feature, không phải bug
        - Vì SQLite không phải strong type database. Nếu muốn strong type, hãy chọn SQL engine khác.
- SQLite không bắt khai báo kiểu dữ liệu -> có thể giản lược đi trong câu lệnh tạo bảng
```
CREATE TABLE ex1(a, b, c);
```
- Mặc dù SQLite sẽ méo quan tâm lắm tới data type, bạn vẫn nên thêm data type vào trong câu lệnh tạo bảng, vì nó sẽ giúp các lập trình viên khác dễ dàng biết được dữ liệu, ý đồ của bạn; và trường hợp khác là bạn muốn port code sang sử dụng db khác -> data type là rất cần thiết.
- VD tạo bảng với data type
```
CREATE TABLE ex2(
    a VARCHAR(10),
    b NVARCHAR(15),
    c TEXT,
    d INTEGER,
    e FLOAT,
    f BOOLEAN,
    g CLOB,
    h BLOB,
    i TIMESTAMP,
    j NUMERIC(10,5),
    k VARYING CHARACTER (24),
    l NATIONAL VARYING CHARACTER (16)
)
```

#### The INTEGER PRIMARY KEY
- Một trong những ngoại lệ của SQLite là column primary key
- Primary key column phải viết là `INTEGER PRIMARY KEY` (không được viết `INT PRIMARY KEY`, vì viết thế nó sẽ thành column thường)
- INTEGER PRIMARY KEY column chỉ chứa 32-bit signed integer. Nếu cố insert non-integer data sẽ dính lỗi.
- INTEGER PRIMARY KEY column có thể sử dụng để implement AUTOINCREMENT.
    - Nếu insert giá trị NULL vào cột INTEGER PRIMARY KEY, sqlite sẽ tự fill giá trị mới lớn hơn giá trị lớn nhất hiện tại
        - Nếu giá trị lớn nhất đang là 2147483647 (max int32), column sẽ được fill vào 1 giá trị random.
    - Bạn có thể lấy giá trị này thông qua API `sqlite_last_insert_rowid()` hoặc `last_insert_rowid()`

#### Comparison & sort order
- SQLite ban đầu là typeless, chỉ đơn giản là lưu dữ liệu thôi
- Tuy nhiên sau này có thêm tính năng thì lại cần chia type ra 1 tí.
    - Cụ thể là chia ra 2 kiểu dữ liệu `numeric` và `text`
- Data ở dạng text -> so sánh hoạt động theo hàm `memcmp()` hoặc `strcmp()` của C:
    - So sánh dựa trên bytes từ 2 string
    - Trả về kí tự đầu tiên khác nhau
    - String nào ngắn hơn sẽ nhỏ hơn
- Data ở dạng số thì phức tạp hơn tí
    - Nếu 2 số đều ở dạng biểu diễn được  -> sẽ được convert sang số thập phân sử dụng `atof()` và compare như là 2 số
    - Nếu 1 số không biểu diễn được, 1 số biểu diễn được -> số biểu diễn được sẽ nhỏ hơn số không biểu diễn được
    - Nếu 2 số đều không biểu diễn được -> dùng `strcmp()`
- Anh em đừng bất ngờ vì tại sao column kiểu number mà lại có cả kiểu không biểu diễn được.
    - Là vì typeless đó, nó lưu cái mẹ gì chả được.
- NULL sẽ được sắp xếp trước bất cứ giá trị nào.
    - NULL so sánh sử dụng operator "<" hay ">=" luôn luôn trả về false.

#### How SQLite determines datatypes
- Version 2.6.3 trở về trước, tất cả các value đều là kiểu số
- Kiểu text chỉ xuất hiện từ version 2.7.0 trở đi.
- Trong các biểu thức, kiểu dữ liệu hầu như dựa vào toán tử
    - Với táon tử số học -> luôn return kiểu số
    - Với toán tử nối chuỗi ("||") luôn luôn return kiểu text
    - Có thể dùng function `typeof()` để test kiểu
```
sqlite> SELECT typeof('abc');
text
sqlite> SELECT typeof('abc' + 123);
integer
sqlite> SELECT typeof('abc' || 123);
text
```
- Các column được định nghĩa kiểu dữ liệu bởi khi tạo table. Data type sẽ là text nếu khi tạo table sử dụng một trong các kiểu:
    - BLOB
    - CHAR
    - CLOB
    - TEXT
- Ngoài ra thì là kiểu số.
- Cột không khai báo kiểu thì là kiểu số.

#### Ví dụ
```
sqlite> CREATE TABLE t1 (a INTEGER UNIQUE);
sqlite> INSERT INTO t1 VALUES('0');
sqlite> INSERT INTO t1 VALUES('0.0');
Error: UNIQUE constraint failed: t1.a
```
- Ví dụ trên fail vì tạo bảng có 1 cột duy nhất kiểu số, mà insert vào 0, 0.0 thì cùng là giá trị số = 0 -> vi phạm quy tắc unique -> fail

```
sqlite> CREATE TABLE t2 (b TEXT UNIQUE);
sqlite> INSERT INTO t2 VALUES(0);
sqlite> INSERT INTO t2 VALUES(0.0);
```
- Ví dụ trên thành công vi với kiểu TEXT thì 0 và 0.0 khác nhau.

- Distinct cũng khác nhau giữa 2 kiểu này
```
sqlite> CREATE TABLE t3 (a INTEGER);
sqlite> INSERT INTO t3 VALUES('0');
sqlite> INSERT INTO t3 VALUES('0.0');
sqlite> SELECT DISTINCT * FROM t3;
0
```
- Trong ví dụ trên, distinct chỉ ra 0 vì 0 hay 0.0 cũng convert về 0 mà thôi

```
sqlite> CREATE TABLE t4 (b TEXT);
sqlite> INSERT INTO t4 VALUES(0);
sqlite> INSERT INTO t4 values (0.0);
sqlite> select distinct * from t4;
0
0.0
```
- Trong ví dụ trên thì là kiểu TEXT -> sẽ ra 2 giá trị khác nhau`

- Mặc định thì câu lệnh `CREATE TABLE` sẽ tạo table trong db main.
- Nếu muốn tạo trong một db khác thì nhớ ghi vào
```
CREATE TABLE test.student (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INTEGER,
    student_email TEXT NOT NULL,
    class TEXT
);
```

- Chỉ tạo bảng nếu chưa tồn tại -> dùng `IF NOT EXISTS`
```
CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INTEGER,
    student_email TEXT NOT NULL,
    class TEXT
);
```

## Validate table với `.schema`
- Để show toàn bộ table
```
sqlite> .schema
CREATE TABLE t1 (a INTEGER UNIQUE);
CREATE TABLE t2 (b TEXT UNIQUE);
CREATE TABLE t3 (a INTEGER);
CREATE TABLE t4 (b TEXT);
```
- Để show 1 table cụ thể
```
sqlite> .schema t1
CREATE TABLE t1 (a INTEGER UNIQUE);
```
- Để show ở dạng có indent cho dễ nhìn
```
sqlite> .fullschema --indent
CREATE TABLE t1(a INTEGER UNIQUE);
CREATE TABLE t2(b TEXT UNIQUE);
CREATE TABLE t3(a INTEGER);
CREATE TABLE t4(b TEXT);
/* No STAT tables available */
```

- Drop table
`DROP TABLE IF EXISTS students;
```
- Drop database
    - SQLite không có separate server process giống relational database khác nên không cần dùng command drop database mà chỉ cần xoá file đi là xong.
