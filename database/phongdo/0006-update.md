## Update
- Cú pháp update tương tự như SQL

```
UPDATE my_table
SET
    column1 = value1,
    column2 = value2
WHERE
    id = 1;
```
- Có thể update dựa trên condition của bảng khác
```
UPDATE table1
SET table1.column1 = (
    SELECT table2.column1
    FROM table2
    WHERE table1.column2 = table2.column2
)
```
