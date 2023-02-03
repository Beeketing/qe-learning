- authentication: Bạn có quyền truy cập không?
- authorization: Bạn được phép làm những hành động gì?
- mysql quản lý authentication và authorization qua các thành phần sau: user, uuthentication methods, privileges, roles
# Authentication
- Đầu tiền mysql check tài khoản có chính xác ko, tiếp theo là tài khoản có bị khóa không => nếu thỏa mãn 2 cái trên thì cho phép kết nối, ko thì từ chối
- Các cột liên quan cho phần xác thực trong bảng mysql.user
  + User
  + 
