## Django tutorial

https://docs.djangoproject.com/en/4.1/intro/tutorial01/

### Start new project

`django-admin startproject mysite` > Tránh sử dụng name như django hoặc test vì sẽ bị conflic với django
Project origin structure

```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

- manage.py > là 1 utility cho phép tương tác với django project
- **init**.py > là 1 file rỗng
- settings.py > file chứa các setting cho project
- urls.py > file định nghĩa các content cho các link khác nhau

### Create new app

```
Sự khác biệt giữa một dự án và một ứng dụng là gì? Ứng dụng là ứng dụng web thực hiện điều gì đó – ví dụ: hệ thống blog, cơ sở dữ liệu hồ sơ công khai hoặc ứng dụng thăm dò ý kiến nhỏ. Dự án là tập hợp các cấu hình và ứng dụng cho một trang web cụ thể. Một dự án có thể chứa nhiều ứng dụng. Một ứng dụng có thể nằm trong nhiều dự án.
```

- Start new app
  `python manage.py startapp polls`
- Include function

```
Hàm include() cho phép tham chiếu các URLconf khác. Bất cứ khi nào Django gặp include(), nó sẽ cắt bỏ bất kỳ phần nào của URL khớp với điểm đó và gửi chuỗi còn lại tới URLconf được bao gồm để xử lý thêm.
=> You should always use include() when you include other URL patterns. admin.site.urls is the only exception to this.
```

- Path() arguement: route
  - route là một chuỗi chứa mẫu URL. Khi xử lý một yêu cầu, Django bắt đầu ở mẫu đầu tiên trong các mẫu url và đi xuống danh sách, so sánh URL được yêu cầu với từng mẫu cho đến khi tìm thấy một mẫu phù hợp.
    VD:

```
https://www.example.com/myapp/, the URLconf will look for myapp/. In a request to https://www.example.com/myapp/?page=3, the URLconf will also look for myapp/.
```

- Path() argument: name
  - Việc đặt tên cho URL của bạn cho phép bạn tham khảo nó một cách rõ ràng từ những nơi khác trong Django, đặc biệt là từ bên trong các mẫu. Tính năng mạnh mẽ này cho phép bạn thực hiện các thay đổi chung đối với các mẫu URL của dự án trong khi chỉ chạm vào một tệp duy nhất.

### Database

- Run cmd dưới khi có các thay đổi về models
  `python manage.py makemigrations polls`
- Run cmd dưới để apply những thay đổi vào DB
  ` python manage.py migrate`
- The sqlmigrate > biểu diễn lại các dòng lệnh ở file models dưới dạng
- Sau đó run lại `python manage.py runserver` để tạo các table vào trong

### Playing with API

- Run cmd `python .\manage.py shell` để mở block query DB
- Trên cmd query
  -- Import models muốn query: `from polls.models import Choice, Question`
  -- Query all: `Question.objects.all()`
  -- Insert new data:

```python
q = Question(question_text="What's new?", pub_date=timezone.now())
q.choice_set.create(choice_text='The sky', votes=0)
```

-- Query with filter:

```python
Question.objects.filter(id=1)
Question.objects.filter(question_text__startswith='What')
Question.objects.get(pk=1) > query by primary key
```

```python
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Question.objects.get(pub_date__year=current_year)
```

```python
# Use double underscores to separate relationships.
# Find all Choices for any question whose pub_date is in this year
>>> current_year = timezone.now().year
>>> Choice.objects.filter(question__pub_date__year=current_year)
```

- Nên tạo thêm các def `__str__` vào model

### Introducing django admin

- First > Tạo super user để có thể đăng nhập vào admin site
  `python manage.py createsuperuser`
- Để apply app đã install (polls app)
- Register Question vào admin.py

```
from django.contrib import admin
from .models import Question

admin.site.register(Question)
```