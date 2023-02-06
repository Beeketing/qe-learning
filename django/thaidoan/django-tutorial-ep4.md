### Django custom admin form

- Tại file `admin.py` thay đổi đoạn code thành 
```python
class QuestionAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'question_text']


admin.site.register(Question, QuestionAdmin)
```
=> Có tác dụng thay đổi thứ tự hiển thị của các fields
- Điều này không ấn tượng với chỉ hai trường, nhưng đối với các biểu mẫu quản trị có hàng tá trường, việc chọn một thứ tự trực quan là một chi tiết quan trọng về khả năng sử dụng.
- Sử dụng fiels set để tách các field 
```python
class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]
```

- Có Question rồi thì phải có Choice
=> register thêm obj Choice 
```python
from .models import Choice, Question
# ...
admin.site.register(Choice)
```
Note: Tại model `Choice` có 1 foreignKey: question
- Cạnh các foreignKey feilds sẽ tự động thêm button `(+)` > Add another question . Click vào sẽ mở ra popup add thêm question mới
> Tuy nhiên điều này là không chính thống > sẽ tốt hơn nếu bạn tạo ra một button trên obj `Question`
- Xóa hàm `register()` gọi đến obj Choice , sau đó thay đổi file `admin`

```python
class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
```
- Issue: sử dụng StackInline khiến cho view nhìn bị dài > Replace bằng TabularInline

- Custom lại form question list
- Tại class QuestionAdmin: sử dụng  hàm list display để hiển thị những fields mong muốn 
``python
    list_display = ('question_text', 'pub_date', 'was_published_recently')
```
- Customize lại bằng hàm display()
```python
    @admin.display(
        boolean=True,
        ordering='pub_date',
        description='Published recently?',
    )
```
- Dùng list_filter = ['pub_date'] > Tạo cột filter
- Dùng search_fields = ['question_text'] > Tạo Feild search