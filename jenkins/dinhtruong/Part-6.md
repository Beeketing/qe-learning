Part 6: Link repo với Jenkins 

Link repo với Jenkins hay tạo job link tới repo ta thực hiện các bước sau để tạo 1 Multi branch Pipeline

1.  CHọn New Item, điền tên job mong muốn và chọn Multibranch Pipeline và click Ok
2. Điền các trường như Display name hoặc Description ... nếu muốn, chú ý phần Branch Sources chọn Add Source
3. Ta thấy những option khác nhau [img](image/Add-source.png)
4. Chọn option mong muốn ví dụ này sẽ chọn source là Github với repo public.
5. Vì là public nên có thể bỏ qua Credentials, điền đường link dẫn tới repo [link](https://github.com/darinpope/jenkins-example-conditionals)
6. Mục tiếp theo ta cần lưu ý đó là Jenkinsfile. Ta có thể setup nhiều Multibranch pipeline chạy nhiều Jenkinsfile với các condition khác nhau bằng cách tạo Jenkinsfile trong repo và link tên Jenkinsfile ở phần Script path.
7. Save và ta đã có 1 Multibranch pipeline chạy Jenkinsfile mà ta gán cho.
8. Nếu muốn 1 Pipeline khác chạy 1 Jenkinsfile khác (VD: Jenkinsfile-1) với các stages, steps có chút thay đổi so với Jenkinsfile trên thì có thể tạo mới ở repo và thực hiện lại các bước trên. Ở mục Script path điền Jenkinsfile-1 vậy là có thể tạo 1 Pipeline khác cùng repo nhưng chạy theo steps khác.