# Context
- URL: https://owasp.org/Top10/A04_2021-Insecure_Design/
- CVS: Common Vulnerabilities and Exposures - Các lỗ hổng và rò rỉ phổ biến
- CWE: Common Weakness Enumeration - bảng liệt kê điểm yếu chung
- New words #english_new_word:
  - flaws: khuyết điểm
  - accurate: chính xác
  - desirable: mong muốn
- Tham khảo thêm:
  - Paved Road for Developers: [Link](https://www.datatheorem.com/solutions/paved-road-for-developers)


# Factors
|Số CWE đã map   |Tỉ lệ incidence tối đa   |Tỉ lệ incidence trung bình  | Trọng số khai tháctrung bình  | Trọng số impact trung bình   | Coverage tối đa  | Coverage trung bình  |   Số lần xuất hiện |Tổng số CVEs|
|---|---|---|---|---|---|---|---|---|
|  40 | 24.19%   |3.00%   | 6.46%   | 6.78   | 77.25%   | 42.51%   | 262 407  | 2 691  |

# Overview
- Một danh mục của 2021, focus vào rủi ro dựa trên những khuyết điểm của kiến trúc, cũng như thiết kế (design); kêu gọi anh em nên tham khảo các thiết kế lỗi cũng như thiết kế an toàn.
- Với tư cách là một cộng đồng, chúng ta cần đi trước bước coding, để thiết kế được hệ thống bảo mật.
- Một số CWE đáng lưu ý bao gồm:
  - CWE-209: Generation of Error Message Containing Sensitive Information (Tạo thông báo lỗi chứa thông tin nhạy cảm)
  - CWE-256: Unprotected Storage of Credentials (Kho chứa thông tin xác thực không được bảo vệ)
  - CWE-522: Insufficiently Protected Creadentials (Thông tin xác thực không được bảo vệ đầy đủ)

# Description
- Insecure design là một danh mục rộng lớn, biểu thị nhiều yếu điểm như "thiếu hoặc không hiệu quả" trong thiết kế.
- Insecure design không phải là nguồn gốc của top 10 các rủi ro trong OSWAP.
- Có sự khác biệt giữa insecure design (thiết kế không an toàn) và insecure implementation (thực hiện không an toàn).
- Phân biệt giữa design flaws (khiếm khuyết trong thiết kế) và implement defects (khiếm khuyết trong thực thi) vì chúng có root cause và cách khắc phục khác nhau.
- Một security design vẫn có thể có implementation defects dẫn tới việc các lỗ hổng có thể bị khai thác.
- Một thiết kế kém an toàn không thể được khắc phục bằng cách triển khai hoàn hảo (perfect implementation), vì theo định nghĩa, các biện pháp bảo mật cần thiết không được tạo ra để chống lại các cuộc tấn công cụ thể. (??)

## Requirements and Resource Management
- Nên cân đối giữa những yêu cầu business của ứng dụng với việc bảo mật.
- Cũng cần xem xét việc tách biệt ứng dụng của bạn với các phần sử dụng service bên ngoài.
- Cần phân tích các yêu cầu kĩ thuật (bao gồm cả chức năng và phi chức năng). 
  - Lập kế hoạch về ngân sách, bao gồm tất cả các hoạt động thiết kế, xây dựng, thử nghiệm và vận hành; bao gồm cả các hoạt động bảo mật.

## Secure Design
- Secure design là văn hóa và phương pháp liên tục đánh giá các mối nguy hiểm để đảm bảo rằng code tốt và test cũng tốt, tránh được các phương pháp tấn công đã biết.
- Việc mô hình hóa các mối đe dọa nên được tích hợp vào quá trình refinement (hoặc các hoạt động tương tự); nhìn vào luồng thay đổi dữ liệu và kiểm soát truy cập, hoặc các luồng kiểm soát bảo mật khác (?)
- Trong quá trình user story developement, cần xác định đúng luồng và trạng thái lỗi, đảm bảo chúng được các bên chịu trách nhiệm và bị ảnh hưởng hiểu rõ và đồng ý.
  - Phân tích các giả định và điều kiện cho các luồng mong muốn và lỗi, đảm bảo chúng vẫn chính xác
  - Xác định cách kiểm tra các giả định và đảm bảo các điều kiện cần thiết cho các giả định.
  - Chắc chắn rằng kết quả được document lại trong user story.
  - Học từ những sai lầm và đưa ra những khuyến khích tích cực để thúc đẩy quá trình cải thiện.
  - Thiết kế an toàn không phải là tiện ích bổ sung, cũng không phải là một công cụ mà bạn có thể thêm vào phần mềm.

## Software Development Lifecycle
- Một ứng dụng bảo mật yêu cầu một quá trình phát triển bảo mật, một số security design pattern, paved road methodology, các component library bảo mật và mô hình các mối đe dọa.
- Liên hệ với các chuyên gia bảo mật ngay từ khi project bắt đầu; và cả trong quá trình phát triển project nữa.
- Cân nhắc ứng dụng OWASP Software Assurance Maturity Model (SAMM) để giúp quá trình structure ứng dụng của bạn bảo mật.

# How to prevent
- Thành lập và sử dụng vòng đời phát triển bảo mật với AppSec chuyên nghiệp để giúp thực thi và thiết kế bảo mật, và kiểm soát các quyền riêng tư liên quan.
- Thực thi và sử dụng các thư viện, pattern bảo mật hoặc component paved road có sẵn.
- Sử dụng threat modeling cho các authentication quan trọng, access control, business logic và các flow chính.
- Tích hợp các ngôn ngữ bảo mật vào luồng điều khiển vào user stories
- Tích hợp kiểm tra hợp lí vào từng tầng (tier) của ứng dụng (từ FE tới BE)
- Viết integration và unit test để validate tất cả các critical flows cover cả case đúng và case sai cho ứng dụng của bạn.
- Tách biệt từng tầng của ứng dụng cả trong hệ thống và network, phụ thuộc vào exposure (sự export à??) và yêu cầu bảo mật (protection need).
- Tách biệt 3rd party service ở tất cả các tầng.
- Limit resource theo user hoặc theo service.

# Example Attack Scenarios
- #1: Sử dụng "câu hỏi và câu trả lời" trong quá trình khôi phục thông tin xác thực.
  - Bị cấm vì có thể nhiều người biết câu trả lời

- #2: Hệ thống rạp chiếu phim cho phép book giảm giá với group tối đa 15 người trước khi yêu cầu đặt cọc. Attacker có thể cheat bằng cách book cả 600 ghế của cả rạp cùng lúc trong vài request khiến rạp bị thất thu. (tức là book xong k đặt cọc đã chiếm slot)

- #3: Hệ thống bán lẻ e-commerce của 1 website không có cơ chế bảo vệ bots mua các vật phẩm hiếm để bán lại trên các trang đấu giá. Điều này gây thiệt hại cho cả chủ của những người làm vật phẩm hiếm và những fan trung thành - không thể sở hữu vật phẩm mình thích với đúng giá.
  - Có thể thiết kế logic để chặn việc mua nhiều cùng lúc; verify lại đơn mua và hủy nó nếu thấy có gì không hợp lệ (VD tạo được cả trăm đơn chỉ trong vài giây từ 1 địa chỉ IP)
  