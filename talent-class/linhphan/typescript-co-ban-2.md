#Class, Interface, Module, Optional/Non-null

## OPTIONAL AND NON NULL
- khong bat buoc
- co '?'   vd: mail_id?: string
- neu ko truyen vao se mac dinh la undefined
- Non null : vd b!  nhat dinh sẽ truyền tham số vào. Nếu ko truyền vào NaN

## CLASS 
- public/ private/ readonly : truy cập từ bên ngoài class / chỉ trong class / truy cập đc từ ngoài class nhưng ko thể thay đổi đc
- thêm hàm bên trong class để truy cập được các thuộc tính private. 
  vd class Employee{
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
        ){}
    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
  }
  const henry = new Employee (`henry`, 30, true)
  console.log(henry.print())

  ## MODULE
  - Module là một cách để tạo phạm vi cục bộ trong tệp, để các biến lớp hàm , .. khai báo trong một module không thể truy cập ngoài module
  - export: tạo module
  - import: sử dụng module đã tạo trước đó

  vd: // @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}

import helloWorld from "./hello.js";
helloWorld();

  ## INTERFACE
  An interface defines the syntax that any entity must adhere to.
  - function khai báo là number thì return bắt buộc phải là number
  - khai báo hàm trong interface là tham số, ko phải hằng số