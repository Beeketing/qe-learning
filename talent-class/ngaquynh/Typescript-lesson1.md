# Lesson 1
## Type
- Hỗ trợ static typing: khai báo kiểu cho biến
Ví dụ: Mọi biến, tham số của hàm hoặc giá trị trả lại có thể có các kiểu được định nghĩa khi khởi tạo

- Cú pháp:

var name: type; 

var name: string = 'Nga', //string
    high: number = "162', //numberic
    pass: boolean = true; //Boolean

- Number: tất cả các giá trị số
- String: ' '/ ""
- Boolean: true/false
- Any: Có thể có giá trị là 1 string, number or bất kỳ kiểu nào
- Arrays: Có 2 cú pháp

my_arr: number[];

hoặc

my_arr: Array<number>

- Void: sử dụng khi hàm ko trả lại bất kỳ giá trị nào
## Fuction
- Cú pháp: 

    function name(parameter: type, parameter: type | string,...): returnType{

        //doing something
    }
## Array & Objects
- Array trong TS cs thể auto mở rộng độ dài nếu cần thiết
## Type Alias
- Ex:

type StringOrNumber = string | number;

type Student = {

    name: string; 

    id: StringorNumber}
}

const studentDetail = (

    id: StringOrNumber,

    studentName: string
): void => {

    console.log('Student ${studentName} has id: ${id}')

}

## Function Signature (chữ ký của function)
- Ex:

type Student = {
    name: string; age: number
}

let printStudent: (student: Student) => void

printtStudent = (myStudent: Student) => {

    console.log('${myStudent.name} is ${myStudent.age} years old')

}

printStudent({name: 'nga'}, age: 30})