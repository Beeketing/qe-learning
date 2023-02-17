# Context
- Link: https://owasp.org/Top10/A02_2021-Cryptographic_Failures/
- Terms:
  - 

# Factors
|Số CWE đã map   |Tỉ lệ incidence tối đa   |Tỉ lệ incidence trung bình  | Trọng số khai thác trung bình  | Trọng số impact trung bình   | Coverage tối đa  | Coverage trung bình  |   Số lần xuất hiện |Tổng số CVEs|
|---|---|---|---|---|---|---|---|---|
|  29 | 46.44%   | 4.49%  | 7.29 | 6.81   | 79.33%   | 34.85%   | 233 788  | 3 075  |

# Overview
- Vươn lên vị trí số 2, được biết tới trước đây là lỗi lộ thông tin nhạy cảm (Sensitive Data Exposure), giống với triệu chứng hơn là nguyên nhân gốc rễ, tập trung vào lỗi liên quan tới mã hóa (hoặc thiếu mã hóa).
- CWE liên quan:
  - CWE-259: Use of Hard-coded Password
  - CWE-327: Broken or Risky Crypto Algorithm
  - CWE-331: Insufficient Entropy

# Description
- Điều đầu tiên là cần xác định nhu cầu bảo vệ của dữ liệu cả trong quá trình chuyển và lưu trữ.
- VD: pwd, thẻ tín dụng, tài liệu về sức khỏe, thông tin cá nhân, bí mật kinh doanh cần có thêm một lớp bảo vệ nữa, chủ yếu nếu dữ liệu đó thuộc luật riêng tư (VD: EU's General Data Protection Regulation (GDPR)), or regulations (VD: PCI Data Security Standard (PCI DSS).
- Đối với tất cả các dữ liệu như sau:
  - Dữ liệu có được truyền ở dạng clear text? Nếu đang sử dụng các protocols như HTTP, SMTP, FTP thì cũng nên sử dụng TLS upgrade như STARTLS.
    - Traffic internet ra bên ngoài khá nguy hiểm. Cần verify tất cả các internal traffic (VD: giữa các load balancers, web servers hoặc hệ thống BE)
  _ Có hệ thống bảo mật nào yếu hoặc cũ, hoặc sử dụng thuật toán cũ kém bảo mật nào còn tồn tại trong code không.
  - Các key mã hóa mặc định có tồn tại trong code không? key có được gen an toàn không? Key có đặt trong source code không?
  - Encrypt đã được enfore chưa? (VD: có cái HTTP header nào còn tồn tại không)
  - Server certificate có hợp lệ hay không?
  - Có cái vector nào lỗi, bị ignore hoặc sử dụng lại trong quá trình mã hóa không?
  - Có dùng random trong quá trình thực hiện mã hóa không? Các seed có đúng là ngẫu nhiên không? Cẩn thận dev sẽ update cái seed này để gen ra theo mong muốn.
  - Có sử dụng deprecated hash function nào được sử dụng như MD5 hay SHA1 không?
  - Có padding method nào bị deprecated rồi mà vẫn đang dùng không (VD: PKCS 1 v1.5)
  - Có message lỗi nào hoặc 1 channel nào ghi lại các lỗi không? (ý là nếu lỗi chi tiết quá thì bọn nó đọc được lỗi --> biết được hệ thống dùng gì --> tấn công).

# How to prevent
- Làm các việc dưới đây, ở mức tối thiệu, và tham khảo các tài liệu tham khảo:
  - Phân loại các processs, store hoặc quá trình chuyển dịch dữ liệu theo từng ứng dụng. Nhận diện đâu là data nhạy cảm thông qua luật quyền riêng tư, requirement hoặc theo business.
  - Không lưu trữ các dữ liệu nhạy cảm không cần thiết. Hãy gỡ bỏ nó sớm nhất có thể. Hoặc có thể sử dụng các chuẩn bảo mật PCI DSS tokenization hoặc even truncation. Data mà không sử dụng lại được thì sẽ không thể bị trộm.
  - Hãy đảm bảo rằng tất cả các dữ liệu nhạy cảm sẽ được mã hóa.
  - Đảm bảo rằng các thuật toán mã hóa mạnh được up-to-date.
  - Enforce sử dụng TLS, HTTPS
  - Bỏ cache cho các response có sensitive data.
  - ... mấy cái dưới cũng tương tự, chỉ văn vẻ hơn thôi.

# Example attack scenarios
- #1: Ứng dụng encrypt số thẻ tín dụng sử dụng tính năng tự encrypt của database. Tuy nhiên data này cũng tự được decrypt khi lấy về, dẫn tới có thể sử dụng SQL injection để lấy được thông tin số thẻ tín dụng ở dạng clear text
- #2: Website không enfore sử dụng TLS cho tất cả các page hoặc chỉ support mã hóa yếu. Attacker sẽ montior network traffic, downgrade từ HTTPS về HTTP, intercept request và đánh cắp cookie của user.
  - Sau đó attacker replay lại cookie và authentication session của user, access và sửa đổi thông tin cá nhân của user.
  - Có thể attacker sẽ sửa các thông tin chuyển đổi như số lượng tiền chuyển đi,...
- #3: password database không dùng salt hoặc dùng salt hash dễ bị decrypt để lưu trữ mật khẩu của mọi người. Kiểu này có thể bị dùng rainbow-table để crack được dễ dàng.
  - Thuật toán đơn giản quá thì có thể dùng sức mạnh của GPU để vét cạn cũng sẽ ra, kể cả có salt rồi đi nữa.

  