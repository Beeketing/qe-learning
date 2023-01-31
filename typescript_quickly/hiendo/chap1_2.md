Chap 1: Getting familiar with TypeScript 
Goal: Started with TypeScript (TS) 
- Các lợi ích của TS
- Cách compile TS code into JS
- Cách work TS với Visual Studio

1.1 Tại sao phải lập trình với TS
- TypeScript là mã nguồn mở được phát triển bới Microsoft in 2012, TS được biên dịch sang  JavaScript 
- Bản chất của TS là biên dịch tạo ra các đoạn mã JS, ngoài ra trong TS có thể sử dụng JS
- Trong TS các biên được gán cho 1 type nhất định còn JS thì không, JS quyết định type của biến khi run, và type  có thể dynmaically changed (hầu hết các develope  thích TS hơn  vì phát hiện được lỗi ngay)
ví dụ 
- In TS:
 let customerId: string;
customerId = 123; // compile-time error
in JS: 
let customerId = "A15BN"; // OK, customerId is a string
customerId = 123; // OK, from now on it's a number

- Có thể use ECMAScript syntax: tức là có thể sử dụng đấy đủ các thư viện của JS bản mới nhất
- TS mang đến những lợi ích của ngôn ngữ type tĩnh khi mà muốn sử dụng nó, hoặc không muốn sử dụng dynamic JS objects

1.2 Typical TypeScript workflows
TypeScript files => JavaScript files -> JavaScript file -> JavaScript engine

1.3 Using the typescript compiler
- using npm pack-age manager with Node.js
- để bắt đầu, cần downlaad và install Node.js
  npm install -g typescript
 
check version của 
  tsc -v





Chap 2: Giải thích về cách khai báo biến và hàm với types