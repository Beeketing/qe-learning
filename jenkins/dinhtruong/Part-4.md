Part 4: Sử dụng Jenkinsfile

- Jenkinsfile là 1 file text chứa code với 2 dạng syntax Scripted hoặc Declarative định nghĩa cho một Jenkins Pipeline và được kiểm tra trong source control (root folder của project). 
- Jenkinsfile (Declarative với Groovy syntax) cơ bản bao gồm: 
  + Agent (bắt buộc): là nơi mà Jenkins sẽ phân bố nơi thực thi Pipeline (server run test, build ...). Nếu ko có agent được chỉ định -> Jenkins sẽ ko thể thực thi được các stages hay steps đã định nghĩa sau đó -> ngắt luồng.

  + Stages và Steps (cũng bắt buộc) được định nghĩa để chỉ định Jenkins sẽ làm các bước gì và ở stage nào thì sẽ thực thi các bước đó.

- Biến môi trường trong Jenkinsfile: có thể xem toàn bộ tại ${YOUR_JENKINS_URL}/pipeline-syntax/globals#env
- Dựa vào các biến môi trường chúng ta có thể custom một số biến để hiển thị theo ý của mình, khiến Jenkins dashboard dễ theo dõi, tracking progress.
- Có các syntax bảo mật ẩn đi thông tin nhạy cảm như là token, username & Password, ....
- Ngoài ra còn có thể thêm những params tuỳ ý, định nghĩa tên, giá trị default và nội dung của params và sử dụng lại ở các steps theo đúng mục đích.