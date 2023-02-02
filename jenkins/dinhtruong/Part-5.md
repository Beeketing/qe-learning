Part 5: Tạo job chạy định kỳ trên Jenkins

Tạo job chạy định kỳ với Trigger: cron build periodically:
- Tạo 1 Pipeline (nếu chưa có) 
- Chọn Pipline Syntax [img](image/Pipeline%20syntax.png)
- Chọn Declarative directive generator [img](image/Directives.png)
- Tại Sample directive chọn trigger: Trigger [img](image/trigger.png)
- Ở mục Add click chọn cron: Build periodically [img](image/cron.png)
- Sau đó sẽ có 1 khung text Build periodically hiện ra để chúng ta nhập để schedule job
- Có thể bấm tooltip ? ở cạnh Build periodically để có thêm thông tin về thực thi job chạy định kỳ sử dụng cron
- Để biết chi tiết syntax để nhập cho phù hợp thời gian theo nhu cầu của chúng ta, có thể click vào tooltip ? ở Schedule
- Ở đây sẽ hiển thị toàn bộ syntax mà Jenkins hiểu và thực thi (gần giống crontab hiện tại đang dùng ở test-hub)
- Khi điền xong thời gian mong muốn chạy dạng cron và tab ra ngoài thì sẽ có thông báo hiển thị chi tiết thời gian chúng ta nhập vào (mặc định theo múi giờ UTC). [img](image/time.png)
- Để convert chuẩn múi giờ và chuẩn thời gian chúng ta mong muốn thì trong phần Help feature Schedule có chỉ dẫn đổi múi giờ với lệnh TZ=Asia/Bangkok hoặc là TZ=Múi giờ hiện tại của bạn (VD: TZ=Etc/GMT+7).
- Tương tự nếu tab ra ngoài thời gian hiển thị lúc này khi chúng ta đổi múi giờ theo múi giờ GMT+7 sẽ có sự khác biệt (thời gian vẫn ở múi giờ UTC nhưng mốc thời gian khác lúc ta chưa đổi múi giờ). [img](image/time%20zone.png)
- Sau khi check đã phù hợp thời gian mong muốn ta ấn Generate Declarative Directive để nhận được 1 đoạn code trigger:

triggers {
  cron '''TZ=Etc/GMT+7
H 1 * * *'''
}

- Ta paste đoạn code này vào Jenkinsfile hoặc Pipeline script và ấn Save
- Job vẫn chưa được set schedule sau khi ta ấn Save mà cần phải chạy job thêm 1 lần nữa.
- Check trong Configuration > Build Trigger. Sau khi Save vẫn chưa đc tick nhưng sau khi run job thêm 1 lần mục này sẽ đc tick và hiển thị schedule như chúng ta vừa setup ở trên.