### Django custom CSS

1 Thay đổi màu chữ
- Tạo 1 folder static trong poll app. Django sẽ tự tìm đến folder static này tương tự như cách nó tìm đến polls/templates

- Tạo thêm thư mục `polls` > Tạo file `style.css` 
  (Tại sao lại phải tạo thêm 1 thư mục polls mà ko tạo file css trực tiếp vào folder static: Do Djano sẽ tìm đến fil static đầu tiên mà nó tìm được , nếu project có nhiều file cùng tên ở những app khác nhau, django sẽ không phân biệt được chúng)

- Thêm đoạn code sau vào file css: 
```css
li a {
    color: green;
}
```
- Sau đó tại file `index.html` thêm đoạn sau vào đầu file 
```css
{% load static %} 

<link rel="stylesheet" href="{% static 'polls/style.css' %}">
```
- {% static %} template tag gen đường dẫn tuyệt đối đến file static

2 Add ảnh background
- Tạo 1 thư mục con lưu trữ ảnh trong `polls/static/polls` > `polls/static/polls/images`
- Add ảnh muốn sử dụng làm background vào đặt tên vd: background.png
- Thêm đoạn code sau vào file css 
```css
body {
    background: white url("images/background.png") no-repeat;
}
```

