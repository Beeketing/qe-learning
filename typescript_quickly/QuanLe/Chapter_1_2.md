Chapter 1:

TypeScript:

  - là ngôn ngữ biên dịch sang JavaScript

  - là 1 bộ siêu tập hợp của JavaScript

  - các biến trong TypeScript được gán kiểu tĩnh, còn JavaScript thì được gán kiểu động

Các files TypeScript sẽ được chuyển thành các files JavaScript, sau đó thực thi các đoạn code đó

TypeScript có thể sử dụng bất kỳ cái gì tồn tại trong thư viện JavaScript

Khi sử dụng thư viện JavaScript thì cần khai báo 1 kiểu cụ thể với phần đuôi là .d.ts nếu không sẽ có thể báo lỗi

Trong IDE, nên dùng npm package manager with Node.js

Node.js không chỉ là 1 framework hay thư viện, nó còn là 1 môi trường rất tốt để chạy JavaScript

Tải và cài đặt Node.js từ nodejs.org gồm cài node và npm

Dùng npm để cài TypeScript và các packages khác tại npmjs.com

Cú pháp cài TypeScript:

  npm install -g typescript

Cú pháp tạo 1 TypeScript project:

  tsc --init

Nên cài bằng cách thêm devDependencies section trong package.json của dự án

Cú pháp check version của TypeScript:

  tsc -v

Có thể cấu hình trước cho quá trình biên soạn từ TypeScript sang JavaScript bằng file tsconfig.json trong dự án


Chapter 2:

Trong TypeScript, 1 biến được khai báo với kiểu dạng tĩnh

Cú pháp:

  [tên biến]: [tên kiểu giá trị]

TypeScript offers the following type annotations:

  string—For textual data

  boolean—For true/false values

  number—For numeric values

  symbol—A unique value created by calling the Symbol constructor

  any—For variables that can hold values of various types, which may be unknown when you’re writing the code

  unknown—A counterpart of any, but no operations are permitted on an unknown without first asserting or narrowing it to a more specific type

  never—For representing unreachable code (we’ll provide an example shortly)

  void—An absence of a value

  undefined -- A variable that has not been assigned a value has a value of undefined

  null -- The value of null represents an intentional absence of value

Có thể hợp nhất khai báo nhiều kiểu cùng 1 lúc, ngắt giữa các kiểu bằng dấu ` | `

Các đối số trong các hàm cũng cần được khai báo kiểu giá trị

Nếu 1 biến có nhiều kiểu giá trị thì không khai báo là kiểu any mà nên khai báo kiểu hợp nhất

TypeScript cho phép tạo các kiểu tùy chỉnh với từ khóa type, bằng việc khai báo 1 class hoặc interface hoặc enum

Cú pháp:

  type [tên kiểu mới] = {
    alias hoặc properties
  }

Declare a type alias for a function signature:

  type ValidatorFn = (c: FormControl) => { [key: string]: any }| null

TypeScript hỗ trợ dùng interface và implements, vì vậy có thể dùng interface để khai báo 1 kiểu giá trị tùy chỉnh cho 1 object

TypeScript dùng structural type system nên có thế khai báo 1 biến với type và giá trị của các object khác nhau, miễn là chúng cùng cấu trúc
