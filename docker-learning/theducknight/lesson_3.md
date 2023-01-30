## Docker exec command
  - Khái niệm
    - `Docker exec` là câu lệnh sử dụng để chạy một command bên trong một container đang hoạt động.
    - Ví dụ, khi đã run thành công image chứa hệ điều hành Ubuntu bằng câu lệnh\
    `docker run -it --name Ubuntu_docker_test ubuntu`\
    ta có thể thao tác với container tại máy host mà không cần vô bên trong container đang hoạt động nhờ câu lệnh `docker exec`

      ![docker exec](images\docker_exec.png)

## Commit container trở thành một image
  - Khi sử dụng image để run container, ta có thể thể config, cài đặt hoặc chỉnh sửa container đó với những gì mong muốn và có thể share image đó thì có thể commit container đó trở thành một image. Như vậy, các config sẽ không bị mất cũng không thể bị sửa đổi và có thể dễ dàng cài đặt cũng như share như dưới dạng package với nhau

  - Run ubuntu bằng câu lệnh `docker run -it --name ubuntu_ducknight ubuntu`

  - Thực hiện install các app cho ubuntu\
    ![contribute ubuntu](images\contribute_ubuntu.png)

  - Sử dụng câu lệnh\
  `docker commit ubuntu_ducknight some_app_ubuntu:v1`\
  để thực hiện save lại container hiện tại trở thành 1 image

    ![docker commit](images\docker_commit.png)

    như hình trên là có mã `sha256` được sử dụng để so sánh với phiên bản gốc và phiên bản các máy remote tải về sử dụng

  - Thực hiện kiểm tra images trong docker thì đã có image jenkins vừa tạo

    ![docker images check](images\new_image_docker.png)

  - Tạo container từ image ubuntu và run câu lệnh `htop`

    ![new container](images\docker_run_commited_container.png)

  - Bởi vì htop đã được cài trong ubuntu nên không có lỗi xảy ra và run app trong ubuntu thành công

## Cách lưu trữ và import image bằng file
  - Để có thể dễ dàng share image mà không cần upload lên server, có thể sử dụng file để có thể dễ dang chia sẽ
  - Sử dụng câu lệnh\
  `docker save --output <file_name>.tar`
  - Ví dụ `docker save --output meow_ubuntu.tar some_app_ubuntu`

    ![image file](images\image_file.png)
  Như hình trên thì file image được export thành công với đường dẫn như trên (desktop)

    ![file location](images\location_file.png)

  - Để import image vào trong máy tính host, sử dụng câu lệnh
  `docker load -i <tên file>`

  - Trước hết phải đi vào path chứa file import (file.tar), sau đó sử dụng command để import
  `docker load -i meow_ubuntu.tar`

    ![import image file](images\import_image_file.png)

  - Kiểm tra image đã được import

    ![check imported image](images\check_image_imported.png)
  Có thể sử dụng câu lệnh `docker tag [IMAGE ID] [REPOSITORY]:[TAG]` để set name và version cho image