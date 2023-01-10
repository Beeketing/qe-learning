## Docker command
- Cấu trúc của một command docker:\
   `docker [MANAGERMENT_CATEGORY] [OPTIONS] COMMAND [ARG...]`\
   Có thể gợi ý các **CATEGORY** bằng cách sử dụng câu lệnh\
   `docker` hoặc `docker help`
   
  ![docker command](images\docker_command.png)

- Ví dụ để kiểm tra các image được lưu trong docker, sử dụng lệnh\
`docker images`

  ![command result](images\command_result.png)

- Ngoài ra, trong mỗi category sẽ các kiểu tương tác khác nhau, ví dụ trong command `docker images` muốn khai thác thêm tương tác với các images, có thể sử dụng lệnh\
`docker image --help` hoặc `docker image`

  ![command help](images\command_help.png)

- Tương tự, trong mỗi kiểu tương tác lại có thêm những kiểu tương tác khác, sử dụng \
`docker imaage pull --help`

  ![command help 2](images\command_help_2.png)

## Image trong docker
  - **Image** là những phần mềm được đóng gói và quản lý bởi docker, ví dụ image đóng gói phần mềm **Jenkins**, image đóng gói hệ điều hành **Windows**, **Ubuntu**, image đóng gói database **MySQL**, **Mongo**,...
  - Trong docker, các image chỉ được đóng gói, không thể sửa đổi.
  - Khi khởi chạy image, docker tạo ra các bản có thể đọc - ghi được (readable - writeable) có thể đọc và ghi data trong mỗi phiên (phase) khởi chạy và được gọi là các **Containers**

  - Để kiểm tra **Image** trong docker, sử dụng câu lệnh\
    `docker images`

    ![check docker images](images\check_image_docker.png)
  
  - Để tạo mới một image, có thể tìm kiếm các image trên [docker hub](https://hub.docker.com/). Ví dụ tìm kiếm phần mềm **Jenkins**

    ![docker hub](images\search_image_on_docker_hub.png)

  - Có thể search các image thông qua câu lệnh\
   `docker search`

    ![docker search](images\docker_search.png)

  - Sau khi tìm kiếm được các image, thực hiện tải image về local thông qua câu lệnh\
  `docker pull [Tên image]:[phiên bản của image]`
    
  - Để thực hiện tải về jenkins, sử dụng câu lệnh `docker pull jenkins/jenkins:lts` ---> thực hiện tải về phiên bản jenkins mới nhất. Trong các hình trên, phiên bản jenkins official đã bị **deprecated** nên sử dụng bản dưới để thay thế

    ![docker pull image](images\docker_pull_image.png)

  - Khi đó, trong docker đã có image được tải về thành công

    ![docker jenkins](images\docker_image_jenkins.png)

## Khởi chạy container
  - Container là là chương trình được khởi chạy bởi image, có thể đọc và ghi (readable - writable) và hoạt động như một phần mềm trên server thông thường
  - Để tạo và chạy image, dùng câu lệnh\
  `docker run [các tham số] [TÊN IMAGE] hoặc [ID IMAGE]`

  - Jenkin là một phần mềm run trên webserver, để thực thi chạy cần truyền vào tham số là **port** để có thể giả lập chạy trên local. Truy cập [docker hub jenkins](https://hub.docker.com/_/jenkins) để kiểm tra port trỏ vào jenkins

    ![docker run jenkins command](images\docker_run_jenkins_command.png)

  - Thực thi chạy jenkins trên docker\
  `docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts`

  - Run jenkins thành công trên local

    ![run jenkins](images\run_jenkins.png)

  - Kiểm tra trong docker desktop đã tạo thành công container

    ![docker desktop](images\jenkins_docker_desktop.png)

  - Tiến hành open jenkins trên local và nhập password trong terminal

    ![run jenkins local](images\jenkins_local.png)

  - Kiểm tra các container đang chạy thông qua command\
  `docker ps`

    ![container running](images\check_container.png)

  - Để kiểm tra toàn bộ các containers, kể cả các container đang dừng, sử dụng câu lệnh như trên nhưng thêm flag `-a` tức là **all**\
  `docker ps -a`

    ![ckeck all container](images\check_all_container.png)

  - Khi run các container, có thể đặt tên cho các container bằng cách thêm flag `--name`\

    ![set name container](images\set_name_container.png)

  - Để xóa container, thực thi câu lệnh\
  `docker container rm [ID CONTAINER] [ID CONTAINER]`

    Lưu ý, nên stop container trước khi thực hiện xóa container. Có thể sử dụng câu lệnh `docker container stop [ID CONTAINER] [ID CONTAINER]`

    ![remove container](images\remove_container.png)
