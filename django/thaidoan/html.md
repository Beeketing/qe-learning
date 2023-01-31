1. Các thành phần bao gồn: Openning tag <p>, Closing tag </p>, Content > gọi là 1 Element

- Thẻ <p>: paragraph
- Nesting element: 1 element nằm trong 1 element khác:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

- Inline element: các block element khác nhau nhưng hiển thị trên cùng 1 dòng
- Block-level element: Các block element khác nhau hiển thị ở từng dòng khác

2. Tuy nhiên không phải tất cả các element đều bao gồm 3 phần đã kể trên. Có 1 số các elemnt chỉ bao gồm single tag.
   VD như các elemnt có mục đích để inser hoặc nhúng 1 document nào đó vào

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon"
/>
```

- 1 Thẻ elemnt có thể có nhiều Attribute

```html
<p>
  A link to my
  <a
    href="https://www.mozilla.org/"
    title="The Mozilla homepage"
    target="_blank"
    >favorite website</a
  >.
</p>
<p>
  A link to my favorite website:
  <a href="https://dribbble.com/" title="baron" target="_blank">baron</a>.
</p>
```

- 1 số attribute value dử dụng dấu ' sẽ dất dễ bị sai format nếu cta cũng sử dụng dấu ' này cho value

```html
<a href='https://www.example.com' title='Isn't this fun?'>A link to my example.</a>
```

- Thay vào đó trong trường hợp này có thể thay thế dấu ' bằng '&apos;'

```html
<a href="https://www.example.com" title="Isn't this fun?"
  >A link to my example.</a
>
```

- Cách python fill attribute vào thẻ html
  VD: có thẻ HTML

  ```html
  <a class="run__result {}" href="{}">{} {}</a> -
  <a href="{}" target="_blank">{}</a>
  ```

  Có 1 Function:

  ```python
  format_html('<a class="run__result {}" href="{}">{} {}</a> - <a href="{}" target="_blank">{}</a>',
              linked_obj.result, link_url, linked_obj.result, linked_obj.type, linked_obj.report_url,
              linked_obj.finished_at_relative())
  ```

  các biến như: linked_obj.result, link_url, linked_obj.result ... sẽ được Python tự hiểu là sẽ gán vào trong `{}` lần lượt từng cái một

- Có thể tự edit html trên web để thử demo sự thay đổi
