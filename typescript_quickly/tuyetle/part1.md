## Chapter 1: Làm quen với type script: 
* Lợi ích của việc lập trình type script
* Cách biên dịch type script thành java script
* Làm việc với visual studio code

- type script phải được biên dịch sang java script thì mới  có thể thực thi được
- sự khác biệt giữ transpiling và compiling:
+ transpiling: Chuyển từ ngôn ngữ này sang ngôn ngữ khác
+ compiling: Chuyển đổi từ ngôn ngữ bậc cao sang mã byte or mã máy
Tuy nhiên từ compiling phổ biến hơn nên sẽ dùng mô tả chuyển từ type script sang java script

- Type script là phiên bản nâng cao hơn rất nhiều so với java script => Có thể lấy bất kì file java script nào để thay đổi đuôi .js chuyển thành .ts, file này có thể chuyển thành  chương trình java script hợp lệ

- Trong ts, có thể khai báo biến thuộc 1 loại nhất định, nếu cố gắng gán cho nó giá trị thuộc loại khác sẽ dẫn đến lỗi biên dịch
Với js thì ngay cả khi chương trình đang chạy cũng có thể gán loại biến khác bằng cách gán giá trị thuộc loại khác
=> Trong ts sẽ báo lỗi ngay khi nhập dựa vào bộ phân tích mã ts, còn js khi chạy nếu truyền sai kiểu của biến mới báo lỗi

Quy trình làm việc ts: Type sript biên dịch sang java script > Gói thành main js > triển khai js

Sử dụng trình biên dịch ts: Sử dụng npm với Node.js
- Node.js: framework/thư viện/môi trường run Js
- npm: sử dụng để cài đặt ts và các gói  từ kho lưu trữ npm www.npmjs.com

Cài đặt ts: `npm install  -g typescript`
Kiểm tra phiên bản ts: `tsc -v`
Compile main.ts sang main.js: `tsc main`

## Chapter 2: Các kiểu cơ bản và tùy chỉnh: 
* Khai báo biến có kiểu và sử dụng kiểu khai báo trong hàm
* Khai báo kiểu bí danh với từ khóa type
* Khai báo custom type

- Khai báo biến có kiểu:
Trong ts , khi đã gán kiểu dữ liệu cho biến thì không thể thay đổi kiểu

Các kiểu: string, number, symbol, any, unknow, never, void

Giá trị đặc biệt: undefine - biến chưa được gán giá trị, null - không trả về giá trị cũng không xác định giá trị
 
Nếu trong hàm không có câu lệnh trả về, nó vẫn trả về giá trị undefine => void sử dụng để ngăn hàm vô tình trả về giá trị

Thêm kiểu rõ ràng cho hàm or phương thức và các phần tử trong public class

Mở rộng kiểu nếu: khai báo biến mà k khởi tạo giá trị cụ thể,
ts hỗ trợ tùy chọn --trinctNullCheck cấm gán null cho các biến có kiểu đã biết

- Các kiểu khai báo hàm: Có thể khai báo rõ kiểu đối số và giá trị trả về
- Kiểu kết hợp: Cho phép giá trị có thể là 1 hay nhiều loại
typeof: dùng để kiểm tra kiểu dữ liệu của giá trị là nguyên thủy
instanceof: dùng để kiểm tra kiểu giá trị là instance của 1 class  hoặc contructor của 1 function

Nếu cần khai báo 1 biến có thể có nhiều loại thì không nên sử dụng any, sử dụng kiểu liên minh (ex: string|number) hoặc khai báo riêng biệt
- xác định các loại tùy chỉnh sử dụng type: cho phép tạo 1 type mới
khai báo tùy chọn cho 1 số thuộc tính, dùng dấu ? trước tên nó

- Sử dụng các lớp như custom type
public, readonly, private, protected

- Sử dụng interface như custom type






















