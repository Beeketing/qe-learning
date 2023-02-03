## Docker network
  - Docker network sẽ đảm nhiệm nhiệm vụ kết nối mạng giữa các container với nhau, kết nối giữa container với bên ngoài, cũng như kết nối giữa các cụm (swarm) docker containers.
  - Để kiểm tra network trong docker, sử dụng câu lệnh\
  `docker network ls`

    ![docker network](images\docker_network_list.png)

  - Để tra cứu thông tin về một network hoặc kiểm tra xem network đó đang có các container nào trỏ vào, sử dụng câu lệnh\
  `docker network inspect [tên network hoặc id network]`

    ![inspect network](images\inspect_network.png)

  - Run ubuntu để rồi thực hiện kiểm tra network, như hình dưới thì network đã có thông tin của một container đang chạy

    ![container mount network](images\container_mount_network.png)

  - Mạng bridge hiện tại đang có 1 container kết nối thì docker sẽ đảm bảo cho container được kết nối, gửi nhận các gói tin ra bên ngoài
  - Thử ping với domain `google.com`

    ![ping network](images\ping_network.png)

  - Khi nhiều container được mount vào cùng một network, chúng có thể share được mạng cho nhau
  - Ngoài ra có thể tạo ra nhiều network (bridge) để có thể chia network ra cho một swarm container làm việc
  - Để tạo mạng bride, sử dụng câu lệnh\
  `docker network create --driver bridge [tên của mạng]`

    ![create network](images\create_network.png)

  - Khi container run trên network, mặc định sẽ sử dụng network của docker tạo ra. Để có thể kết nối container vào network của mình, sử dụng câu lệnh\
  `docker run -it --name [tên container] --network [tên network] [tên image hoặc image id]`

  - Ta có thể gán network cho một container đang khởi tạo hoặc đang chạy, sử dụng câu lệnh\
  `docker network connect [tên mạng connect] [tên container hoặc id container]`