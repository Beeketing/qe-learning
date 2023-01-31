Part 3: Jenkins Pipeline

Định nghĩa Pipeline là gì?
- Là tập hợp các plugin hỗ trợ cho việc triển khai và tích hợp quy trình continous delivery (CD) vào Jenkins
- Gồm nhiều stage nhỏ thực hiện các hành động được setup độc lập. VD: job Freestyle chỉ thực hiện 1 hành động nhất định thì Pipeline có thể xem là 1 chuỗi các job Freestyle liên kết lại với nhau tạo thành 1 job phức tạp gồm đi qua nhiều stage.
- Được setup bằng file text tên là Jenkinsfile 
- File này có thể được viết theo 2 dạng syntax là declarative hoặc scripted

Tại sao chọn Pipeline?
- Nói jenkins là nhớ tới phần mềm giúp tự động hoá các công việc build, test 1 cách đơn giản và Pipeline hỗ trợ rất mạnh từ đơn giản cho tới những hệ thống CI CD phức tạp.
- Ngoài ra Pipeline còn có một số ưu điểm hơn so với Freestyle:
    + Pipeline được triển khai bằng code (Jenkinsfile với Declarative hoặc Scripted syntax) giúp dễ dàng maintain
    + Khi 1 job Pipeline đang chạy mà chúng ta tắt sv giữa chừng thì khi bật lại nó sẽ tự động chạy tiếp để hoàn thành job. Điều này là ko thể với Freestyle.

Tạo Pipeline:
- Có thể tạo Pipeline bằng một trong những cách sau:
    + Tạo trong giao diện Blue Ocean 
    [https://www.jenkins.io/doc/book/pipeline/getting-started/#through-blue-ocean]
    + Tạo trong Jenkins Homepage với Definition chọn Pipeline script 
    [https://www.jenkins.io/doc/book/pipeline/getting-started/#through-the-classic-ui]
    + Tạo trong Jenkins Homepage với Definition chọn Pipeline script from SCM 
    [https://www.jenkins.io/doc/book/pipeline/getting-started/#defining-a-pipeline-in-scm]
