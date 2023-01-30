## Export data
```
sqlite3 ./dev.db
.output ./backup.sql
.dump
.exit
```
- Có thể export riêng lẻ
```
.output ./backup_users.sql
.dump users # -> chỉ export bảng users
.exit
```
- Nếu chỉ muốn export schema
```
.output ./backup_schema.sql
.schema
.exit
```

## Import data
- Để import data thì dùng .read
```
sqlite3 ./restore.db
.read ./backup.sql
.exit
```