## Basic usage
- Đơn giản nhất là dùng command
```
sqlite3 people.sqlite '.schema' > schema.sql
```
- Có thể dùng cách phi vào sqlite, set output là file; sau đó dùng lệnh .schema để in ra output schema là được
```
❯ sqlite3 people.db
SQLite version 3.32.3 2020-06-18 14:16:19
Enter ".help" for usage hints.
sqlite> .output demo_export.sql
sqlite> .schema
sqlite> .quit
~/data/tools/sqlite 56s                             12:05:06 AM
❯ cat demo_export.sql
CREATE TABLE ex1(a,b,c);
```
- Trường hợp database có nhiều connection, chỉ muốn export 1 schema cụ thể thì dùng lệnh sau
```
sqlite3 DATABASE_FILE.sqlite '.schema DATABASE.*' > database_schema.sql
```

- Export 1 bảng cụ thể
```
sqlite3 DATABASE_FILE.sqlite '.schema TABLE' > table_schema.sql
```