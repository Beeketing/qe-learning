## 2 Django admin

- Customization
  ```
  admin.site.index_title = "The Bookstore" # thay đổi ở title trên title tag
  admin.site.site_header = "The Bookstore Admin" # thay đổi ở Title tag
  admin.site.site_title = "Site Title Bookstore" # thay đổi ở title trên title tag,
  ```

### Setup custom/multiple django admin sites

- New admin area for the blog
- Trong blog/admin.py, tạo class BlogAdminArea

```python
from django.contrib import admin
class BlogAdminArea(admin.AdminSite):
    site_header = "Blog Admin Area"
blog_site = BlogAdminArea(name="Blog Admin")
```

- Trong core/urls.py, import admin site

```python
from blog.admin import blog_site
```

- Thay chỗ url pattern

```python
urlpatterns = [
    path('admin/', blog_site.urls),
]
```

- Ra refresh -> thấy thay đổi là vào link admin/ sẽ hiển thị blog site admin. Tuy nhiên chưa có dữ liệu do chưa có gì cả.

- Thêm model Post:
- Vào trong blog/models.py

```python
class Post(models.Model):

    title = models.CharField(max_length=100)
    def __str__(self):
        return self.title
```

- Vào trong admin.py, thêm vào dòng sau:

```python
from . import models
# old codes...
blog_site.register(models.Post)
```

- Thay url vào admin: sửa trong core/urls.py là xong

```python
urlpatterns = [
    path('blogadmin/', blog_site.urls),
]
```

- Để chạy được code thì phải tạo migration và run:

```
python3.9 manage.py makemigrations
python3.9 manage.py migrate
```

- Có thể dùng cả 2 cháu: admin và blog admin

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('blogadmin/', blog_site.urls),
]
```

- Có thể register model Post vào admin site: ở blog/admin.py, thêm dòng sau:

```python
admin.site.register(models.Post)
```

### Overriding the default admin site

- Mặc định thì nó load admin trong thằng core.
- Có thể thay đổi mặc định bằng cách như sau:
  - Sửa file blog/apps, thêm class BlogAdminConfig
  - Sửa file core/settings.py, sử dụng BlogAdminConfig vừa tạo trong mục INSTALLED_APPS

```python
# blog/apps.py
from django.contrib.admin.apps import AdminConfig
class BlogAdminConfig(AdminConfig):
    default_site = "blog.admin.BlogAdminArea"
## core/settings.py
INSTALLED_APPS = [
    'django.contrib.admin'
]
# ...
```

- Note: 1 số lưu ý khi migrate:
  - Trước khi commit lên > Revert lại migration cũ
  ```
  python .\manage.py migrate th {migration gần nhất}
  ```
  - Sau đó pull code về > mục đích là để tránh bị override migration trên master
  - Sau đó migration lại rồi đẩy code lên
