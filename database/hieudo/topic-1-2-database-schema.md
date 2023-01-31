# Database Schemas
## Schema là gì?
Schema là điểm đặc trưng của database so với các loại data structure khác.

Schema là sơ đồ phản ánh các **entity** và **relationship** của chúng trong context của user, với goal là giúp user lưu trữ data một cách ngăn nắp và dễ query thông tin hơn.

## Có những loại schema nào?
Database schema được chia theo loại database sử dụng chúng. Có 2 loại schema chính:

- Static: loại schema này thường được áp dụng cho các relational database. Structure của database được xác định ahead of time bởi 1 static schema. Các implementation sẽ enforce các rules và validations để giữ đảm bảo thông tin trong database consistent với schema đã define.

- Dynamic: schema thường sử dụng cho các database NoSQl. Schema có tính chất động và sẽ dc tạo ra từ input data. User ko define các entity-relationships ahead of time.

## Làm thế nào để tạo schema?
Bước đầu tiên là tìm hiểu về tính chất của data muốn lưu trữ và context khi dụng data đó. Một số câu hỏi nên đặt ra trong quá trình tìm hiểu:

Về data:
- Data được lưu là gì?
- Nên lưu những thông tin/attributes nào?
- Số lượng data nhập vào có tăng nhanh không?
- Kích thước tổng của database có lớn không?

Về context sử dụng data:
- Số luợng query đến database có lớn không?
- Số lượng **concurrent** user sử dụng database có lớn không?
- Các query thường gặp nhất là gì? Read-heavy hay write-heavy?

Trong quá trình phát triển schema sẽ phải đi qua các bước sau:

`Logical schema => Physical schema`

- Logical schema: Model phản ánh các entity vs relationships với tính chất platform agnostic, ko phụ thuộc vào 1 stack tech cụ thể. Sẽ bao gồm tất cả các knowledge, rules, contraints được collect trong quá trình tìm hiều về data và context sử dụng data.

- Physical schema: implementation của logical schema cho 1 platform cụ thể. Sẽ bao gồm các details về cách data được lưu trữ trên filesystem, syntax để query được data,...