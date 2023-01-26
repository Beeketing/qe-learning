## Storage trong docker (hehe)
<blockquote>
  - Storage trong docker là một tính năng quản lý data của docker. Data ở đây có thể hiển là các file trong quá trình chạy ứng dụng như file log, file data…<br>
  - Khi chạy một container, data trong quá trình vận hành được chưa ở writeable layer và sẽ bị mất đi khi container bị xóa. Để giải quyết được vấn đề này, Docker đã đưa ra một cơ chế để quản lý data của các container đó là Docker Storage.<br>
  - Về bản chất, Docker storage là một cơ chế cho phép lưu trữ các data của container và docker host bằng cách mount mot folder từ Docker Container vào Docker Host.<br>
  - Bằng việc mount này, data trong Container giờ đây sẽ được an toàn hơn, dễ dàng chia sẻ giữa các container với nhau hơn. Một số chứa setting hay log có thể được đọc dễ dàng hơn trong quá trình troubleshoot các Container.<br>
  <div style="text-align: right">
  <a href="https://viblo.asia/p/mount-trong-docker-4dbZNnBkZYM#:~:text=Storage%20Trong%20docker,troubleshoot%20c%C3%A1c%20Container.">nguồn: viblo.asia</a>
  </div>
  </blockquote>

### Chia sẻ dữ liệu từ absolute path trong host sang các containers (**bind mounts** type)
  - Việc chia sẻ dữ liệu từ máy host vào trong docker container là việc mount một folder chứa file vào trong docker
  - Khi mount thành công folder vào trong container thì container sẽ đọc được những file có chứa trong folder đó
  - Việc chia sẽ này sẽ giúp container có thể đọc được những config từ máy host để có thể khởi chạy thành công được
  - Để mount folder vào trong một image sẽ khởi chạy thành container, sử dụng câu lệnh\

  `docker run -it [path folder]:[path folder container] [image id] --name [tên container]`

  `docker run -it -v /mnt/d/learning/docker_learning_new/docker_share_folder/:/home/foler_sharing --name docker_hehe 7641ee88ecb5`

  ![docker mount](images\docker_mount.png)

  - Sau khi mount thành công folder vào trong container, thực hiện kiểm tra việc share file giữa host và container

    ![docker share](images\sharing_folder.png)

  - Hiện tại đã share thành công folder, thực hiện kiểm tra nội dung trong file

    ![content file](images\content_file.png)

  - Để thực hiện chia sẻ giữa những container với nhau, có thể sử dụng các cách sau
    - Cách lấy folder share từ một container đã được mount drive từ máy host, sử dụng câu lệnh\

    `docker run -it --name [tên container] --volume-from [container thứ 1] [image id]`

    ![mount drive another container](images\mount_drive_another_container.png)

    - Kiểm tra folder share trong container mới, như hình dưới thì folder đã được mount thành công từ một container

    ![check another container](images\share_between_container.png)

### Chia sẻ thông qua cách tạo và quản lý Volume (**Volume** type)
  - Về hoạt động Volumes tưng tự như Bind Mounts, những Volume được quản lý bời Docker. Trong khi Bind Mounts, file hoặc thư muc cần mount phải tồn tại trên docker host.
  - Volume khi tạo ra sẽ nằm ở thư mục /var/lib/docker/volumes/Volume khi tạo sẽ nằm ở thư mục.
  - Volume cũng support cơ chế của volume drivers, cho phép lưu trữ dữ liệu tới một server remote hoặc Cloud …
  - Có thể quản lý volume sử dụng CLI hoặc API.
  - Volume hoạt động trên cả Linux và Windows container
  <div style="text-align: right">
  <a href="https://viblo.asia/p/mount-trong-docker-4dbZNnBkZYM#:~:text=v%20v%C3%A0%20%2Dmount.-,Volumes,Volume%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20tr%C3%AAn%20c%E1%BA%A3%20Linux%20v%C3%A0%20Windows%20container,-S%E1%BB%AD%20d%E1%BB%A5ng%20Volume">nguồn: viblo.asia</a>
  </div>

  - Để kiểm tra các Volume đang được sử dụng, sử dụng câu lệnh\
  `docker volume ls`

    ![volume](images\docker_volume_ls.png)

  - Thực hiện tạo nhẹ một chiếc volume\
  `docker volume create SUPERVOLUME_1`

    ![create volume](images\create_volume.png)

  - Kiểm tra volume vừa tạo\
  `docker volume inspect SUPERVOLUME_1`

    ![inspect volume](images\inspect_volume.png)

  - Để xóa volume, sử dụng câu lệnh\
  `docker volume rm [tên volume]`

  - Container có thể lưu trữ data cố định trong một volume
  - Sử dụng câu lệnh sau để mount volume vào container\
  `docker run -it --name [tên container] --mount source=[tên volume],target=[path container] [image id]`

    ![volume mount container](images\volume_mount_container.png) 

  - Thực hiện update cho Volume bên trong container bằng cách tạo file hoặc thêm sửa xóa folder,...
  - Khi ta thực hiện xóa các container đã được mount vào một volume nào đó, khi sử dụng lại volume đó với một container khác, data bên trong container đó sẽ không bị mất đi và có thể sử dụng lại tại các phiên khác

  - Ngoài ra, có thể ánh xạ một volume đến một thư mục cụ thể trong máy host. Để làm được điều này, sử dụng câu lệnh sau\
  `docker volume create --opt device=[path host] --opt type=none --opt o=bind [tên volume]`

    ![mount volume with host folder](images\mount_volume_with_folder.png)

    ![mount successfully](images\successfully_mount_with_folder.png)'

  - Khi mount một volume với một folder host, khi bind vào trong một container, phương thức sử dụng để bind sẽ không thể dùng `--mount` mà phải dùng `-v` vì như hiện tại, volume đóng vai trò cầu nối giữa container và máy host

    ![mount host by volume](images\mount_host_by_volume.png)

  - Như hình trên, một container mới đã nhận thành công data từ máy host thông qua volume