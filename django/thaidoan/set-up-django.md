# Django-self-learning

Học này học kia

## 1 Install and set up

- Dpwnload và Cài đặt Pycharm
- Download python jdk 3.9.x
- Install python jdk (Lúc install nhớ tick chọn add variable to PATH) > Nếu quên vào PATH để thêm lại
- Kiểm tra xem đã install được chưa bằng `python -V`, `pip -V`

- Cài đặt pipenv
  `pip install pipenv`
- Tiếp tục vào PATH thêm 2 đườnng dẫn sau vào PATH

```
C:\Users\ocg\AppData\Roaming\Python\Python39\Scripts
C:\Users\ocg\AppData\Roaming\Python\Python39\Site-Packages
```

- Kiểm tra xem đã setup được pipenv được hay chưa : `pipenv -h`
- Run lệnh `pipenv shell` + `pipenv install django` để install các package của django vào

- Download và install Doker
- Tạo 1 thư mục mới trong ổ D: hoặc j đó
- Tạo mới 1 Database và connect vào DB
  VD: test-huh blablabla
  - Tại DB run các cmd sau:

```
INSERT INTO bgroup_docs.auth_group (id, name) VALUES (1, 'Tester');
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (1, 1, 1);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (2, 1, 2);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (3, 1, 3);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (4, 1, 4);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (5, 1, 5);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (6, 1, 6);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (7, 1, 7);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (8, 1, 8);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (9, 1, 9);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (10, 1, 10);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (11, 1, 11);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (12, 1, 12);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (13, 1, 13);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (14, 1, 14);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (15, 1, 15);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (16, 1, 16);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (17, 1, 17);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (18, 1, 18);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (19, 1, 19);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (20, 1, 20);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (21, 1, 21);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (22, 1, 22);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (23, 1, 23);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (24, 1, 24);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (25, 1, 25);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (26, 1, 26);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (27, 1, 27);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (28, 1, 28);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (29, 1, 29);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (30, 1, 30);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (31, 1, 31);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (32, 1, 32);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (33, 1, 52);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (34, 1, 85);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (35, 1, 86);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (36, 1, 87);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (37, 1, 88);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (39, 1, 90);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (38, 1, 92);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (40, 1, 96);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (41, 1, 100);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (43, 1, 101);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (44, 1, 102);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (45, 1, 103);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (46, 1, 104);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (47, 1, 105);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (48, 1, 106);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (49, 1, 107);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (50, 1, 108);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (51, 1, 110);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (42, 1, 112);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (52, 1, 113);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (53, 1, 114);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (54, 1, 115);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (55, 1, 116);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (56, 1, 117);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (57, 1, 118);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (58, 1, 119);
INSERT INTO bgroup_docs.auth_group_permissions (id, group_id, permission_id) VALUES (59, 1, 120);
```

- Mở terminal: run cmd
  `docker run -v "${Thư mục đã tạo}/data":/var/lib/mysql --name mysql8 -e MYSQL_ROOT_PASSWORD=root -p {port muốn chạy} -d mysql:latest`
- Tại project đã tạo > Terminal: run
  ```
  python manage.py migrate
  python manage.py runserver
  ```
- Có thể thay port bằng cách thêm tham số phía sau:
  `python manage.py runserver http://127.0.0.1:8080`
