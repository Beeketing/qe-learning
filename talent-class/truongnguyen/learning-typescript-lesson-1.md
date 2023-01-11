# Typescript basic
- Superset của JS
- Browser k đọc đc TS, phải qua complie sang JS
- npm i -g typescript : cái TS lên máy
- Đuôi file .ts
- tsc [filename] : complie file sang JS
- tsc -w [filename] : define ra thay đổi
- install nodemon để xem thay đổi
## Type basic 
- Thống nhất type của biến
## Function
- Khai báo hàm tốt nhất nên có kiểu dữ liệu của tham số
- Khai báo Function dùng dấu :Fucntion
- Dấu hoặc : |
- Tham số k bắt buộc dùng dấu ?
    - Ex: function a(b ?: number){
        return 3 * b;
    }
- Gán giá trị default của tham số bằng dấu =
    - Ex: function a(b : number =1){
        return 3 * b;
    }
## Array and Objects
- Chỉ add đc phần tử đúng kiểu dữ liệu đc khai báo
 - K thêm properties mới cho object
## Explicit type
- Khai báo định dạng ngay từ đầu
    - ex: let myName: string,....
- khai báo union : mix giữa các định dạng
    - ex let mixed: (string | number | boolean)
## Any types
- Ít khi dùng any
## Type alias
-  Tạo type mới từ type có sẵn
    - ex: type StringOrNumber = string | number
## Function signature
- K trả về gì : khai báo void

