# Getting familiar with TypeScript
## Why program in TypeScript
- TypeScript is a compile-to-JavaScript language. From JavaScript (JS), we have TypeScript (TS). And with TS code program, it will be converted into JS. This processing is called "compilation" (compile).

***So, why is TypeScript?***
- Simply, we can understand that TS is JS with "type", thus, TS **static** code analyzer will catch error as you type (only **dynamic** in JS).
- That "type" in TS is optional.
  Example:
  - JavaScrip:
    ```
    //declare `a_static` (biến tĩnh)
    let a_static: string; //error alert here

    //declare `b_dynamic` (biến động)
    let b_dynamic;
    b_dynamic = 55; //no alert, b_dynamic is a number var.
    b_dynamic = "55"; //no alert too, but b_dynamic became to string var.
    ```
  - Type Script:
    ```
    //declare `a_static` (biến tĩnh)
    let a_static: string;
    a_static = 55; //error alert here
    a_static = "55"; //no more alert

    //declare `b_dynamic` (biến động)
    let b_dynamic;
    b_dynamic = 55; //no alert, b_dynamic is a number var.
    b_dynamic = "55"; //no alert too, but b_dynamic became to string var.
    ```

- Check TypeScript roadmap at [Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap) to see what’s available now and what’s coming in future releases of TypeScript.

[More Informations](https://topdev.vn/blog/typescript-la-gi):
```
Ưu điểm của Typescript:
- Dễ dàng hơn trong phát triển các dự án lớn, được hỗ trợ bởi các Javascript Framework lớn.
- Hầu hết các cú pháp hướng đối tượng đều được hỗ trợ bởi Typescript như kế thừa, đóng gói, constructor, abstract, interface, implement, override…v.v
- Cách tổ chức code rõ ràng hơn, hỗ trợ cơ chế giúp kiến trúc hệ thống code hướng module, hỗ trợ namespace, giúp xây dựng các hệ thống lớn nơi mà nhiều lập trình viên có thể làm việc cùng nhau một cách dễ dàng hơn.
- Hỗ trợ các tính năng mới nhất của Javascript. TypeScript luôn đảm bảo việc sử dụng đầy đủ các kỹ thuật mới nhất của Javascript, ví dụ như version hiện tại là ECMAScript 2015 (ES6).
- Một lợi thế của Typescript nữa là mã nguồn mở vì vậy nó miễn phí và có cộng đồng hỗ trợ rất lớn.
- Với static typing, code viết bằng TypeScript dễ dự đoán hơn, và dễ debug hơn.

Typescript đang được sử dụng ở các Framework phổ biến như Angular, Nodejs, Ionic…
```

