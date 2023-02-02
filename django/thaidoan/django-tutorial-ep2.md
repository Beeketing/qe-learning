### Writting django app

- Defind các trang view page mới

```python
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
```

- Sau đó phải chèn thêm path vào Urls để có thể mở vào page đó

```python
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
```

- Tại view page, insert thêm 1 def index()

```python
# Displays the latest 5 poll questions in the system, separated by commas, according to publication date:
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)
```

- Tạo Template mới
  -- Tạo folder mới : Tệp cài đặt mặc định định cấu hình chương trình DjangoTemplates có tùy chọn APP_DIRS được đặt thành True. Theo quy ước, DjangoTemplates tìm kiếm thư mục con "template" trong mỗi INSTALLED_APPS.

-- Trong thư mục template mà bạn vừa tạo, hãy tạo một thư mục khác có tên là polls và trong đó tạo một tệp có tên là index.html. Nói cách khác, template của bạn phải ở polls/templates/polls/index.html
-- Sử dụng đến shortcut `render()` để load được template
-- Shortcut: `get_object_or_404()`

- Cách sử dụng template system
  VD:

```html
<h1>{{ question.question_text }}</h1>
<ul>
  {% for choice in question.choice_set.all %}
  <li>{{ choice.choice_text }}</li>
  {% endfor %}
</ul>
```

-- Django template sử dụng dot-lookup syntax để access vào các object
-- Đầu tiên Django thực hiện lookup trong obj question
-- Method-calling happens in the {% for %} loop: question.choice_set.all is interpreted as the Python code question.choice_set.all(), which returns an iterable of Choice objects and is suitable for use in the {% for %} tag.
-- Không nên sử dụng hardcode:
VD:

```html
<li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
```

-> Link url được viết trong thẻ html > Điều này sẽ khiến cậu gặp khó khăn nếu thay đổi url ở nhiều template
-> Solution: define cái url trong biến Path() trong {Page}.urls
-- Remmember to đặt tên cho app_name. Do trong 1 project thực tế sẽ có nhiều hơn 1 app

- Update đoạn code sau vào file detail.html

```html
<form action="{% url 'polls:vote' question.id %}" method="post">
  {% csrf_token %}
  <fieldset>
    <legend><h1>{{ question.question_text }}</h1></legend>
    {% if error_message %}
    <p><strong>{{ error_message }}</strong></p>
    {% endif %} {% for choice in question.choice_set.all %}
    <input
      type="radio"
      name="choice"
      id="choice{{ forloop.counter }}"
      value="{{ choice.id }}"
    />
    <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label
    ><br />
    {% endfor %}
  </fieldset>
  <input type="submit" value="Vote" />
</form>
```

-> Diễn giải code:

- Đoạn code trên hiển thị các radio button cho mỗi câu hỏi
- Giá trị của mỗi radio button là ID của câu hỏi liên quan
- Tên của mỗi radio button là 'choice'
  -> Điều đó có nghĩa là: nếu 1 ai đó mà chọn 1 radio button và submit > Nó sẽ gửi 1 POST data choice = # (# là ID của selected choice)

- Set 1 form `action` tới `{% url 'polls:vote' question.id %}` và set `method` là `post` > Điều này rất quan trọng vì khi submit nó sẽ làm thay đổi server > ncl sẽ dùng POST
- `forloop.counter` cho biết số lần vòng for đã đi qua

- Tại file `polls/views.py` > update đoạn code sau:

```python
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
```
> Đoạn code trên bao gồm 1 số phần chưa được cover trước
- `request.POST` là 1 đối tượng giúp bạn submit dữ liệu bằng keyname > Trong trường hợp này là `request.POST['choice']` > Sau đó trả về ID của choice được chọn là 1 chuỗi. Giá trị trả về của `request.POST` luôn là 1 chuỗi 
- Nếu `choice` mà không được given > Raise `KeyError`
- Sau mỗi lần đến số choice tăng lên: code sẽ trả về 1 HttpResponseRedirect sau khi dùng phương thức POST > Nên trả về HttpResponseRedirect thay vì HttpResponse
- Sử dụng phương thức `reverse()` Chức năng này giúp tránh phải mã hóa cứng một URL trong chức năng xem. Đại để là gọi đến file view đã được đặt tên `app name` trước đó , file view đó đã được conf `Url` tương ứng . Trong trường hợp này, sử dụng URLconf mà chúng ta đã thiết lập trong  3, lệnh gọi reverse() này sẽ trả về một chuỗi như sau: 
```python
/polls/3/results/ (Trong đó 3 là question.id)
```
- Sau khi vote cho một câu hỏi, vote() function sẽ chuyển hướng đến trang kết quả cho câu hỏi.
```python
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
```
=> func results trên giống với detail() func đã khởi tạo tuy nhiên điểm khác biệt là template name: result.html

- Tiếp tục tạo file result.html
```html
<h1>{{ question.question_text }}</h1>

<ul>
{% for choice in question.choice_set.all %}
    <li>{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}</li>
{% endfor %}
</ul>

<a href="{% url 'polls:detail' question.id %}">Vote again?</a>
```
==> Tuy nhiên đoạn code trên có 1 vấn đề. nếu 2 user cùng thực hiện vote tại 1 thời điểm: hệ thống sẽ chỉ ghi nhận 1 > Điều này là bởi `race condition` > THAM KHẢO SAU

## Tối ưu lại file view
- Tại file view.py để ý các func: detail, result => Các chế độ xem này đại diện cho một trường hợp phổ biến của phát triển web cơ bản: lấy dữ liệu từ cơ sở dữ liệu theo tham số được truyền trong URL, tải mẫu và trả về mẫu được kết xuất. Bởi vì điều này quá phổ biến, Django cung cấp một lối tắt, được gọi là hệ thống "chế độ xem chung".

- Amend URLconf > Thay đổi file url
```python
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
```
- Amend viewconf > Thay đổi các func detail(), results(), index() tại file view.py như sau
```python
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'
```
