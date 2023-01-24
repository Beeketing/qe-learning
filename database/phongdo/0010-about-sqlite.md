# About SQLite
- SQLite là một thư viện SQL có các tính chất:
    - self-contained
    - serverless
    - zero-configuration
    - transactional
- Code SQLite được public, ai thích dùng gì thì dùng, kể cả thương mại cũng ok
- SQLite được sử dụng cực kì rộng rãi, kể cả trong một vài ứng dụng nổi tiếng:
    - Adobe lightroom
    - Airbus (flight software)
    - Apple cũng dùng nhiều trong 1 số app như iPhone, iPods, iTunes,
    - ...
- SQLite là SQL database dạng nhúng: đọc ghi trực tiếp vào file, không có process riêng.
- File format cross-platform -> copy paste tẹt
- SQLite cũng là 1 thư viện rất nhẹ, khoảng ~ 750KB thôi.
- Bộ nhớ càng khoẻ thì SQLite hoạt động càng nhanh.
    - Về cơ bản thì SQLite vẫn nhanh hơn ông cháu filesystem I/O khoảng 35%
- SQLite cũng được test rất kĩ trước khi release, đoạn này chém code coverage 100%, độ tin tưởng cực cao các thứ, có đội dev full-time, vẫn đang phát triển cực mạnh.
- SQLite project được start vào 09/05/2000 và có ý định phát triển cho tới 2050.

> Seek forgiveness for yourself as you forgive others. And just as you have received SQLite for free, so also freely give, paying the debt forward