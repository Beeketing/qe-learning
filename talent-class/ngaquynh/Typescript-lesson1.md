# Lesson 1
## Type
- Hỗ trợ static typing: khai báo kiểu cho biến
Ví dụ: Mọi biến, tham số của hàm hoặc giá trị trả lại có thể có các kiểu được định nghĩa khi khởi tạo
- Thống nhất giá trị giữa các biến
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
- ex1: 

const square = (side: number) => side * side;

console.loh(square(3));

- ex2: 

let greet: Function // khai báo function

great = () => console.log('hi');

- ex3: 

const add = (a: number; b: number; c: number) => a + b+ c

console.log(add(5, 6, 7)); //nếu thay phần tử trong thành string thì sẽ báo lỗi

const add = (a: number; b: number; c: number | string) => {

    console.log(a + b);
    console.log(c);
}

add(1,2,3); => 3

add(1,2,'nga') //=> 3   nga

- ex4: kiểu viết hàm có giá trị mặc định cho tham số

const addDefault = (a: number, b: number, c: number | string = 10) => {  // nếu ko truyền dữ liệu vào c thì giá trị sẽ là 10 

    console.log('sum': a+b+c);

    console.log(c);
}
addDefault(1,3,'nga') // sum 4   nga
addDefaule(1,3) //=> sum 4   10

- ex5: 

const minus = (a: number; b: number):number => a - b

## Array
- Array trong TS cs thể auto mở rộng độ dài nếu cần thiết
- Object đã khai báo rồi không thể thêm properties nữa 

- ex1: 

let names = ['A', 'B', 'C'];

 name.push('son'); //chỉ thêm 1 string vào mảng 
 - ex2: 

 let.mixed = [1, 'nga', false]

 mixed.push(5) //ok

 mixed.push('nga') //ok

 mixed.push(false) //ok

 mixed.push(a: '2'; b: "3") // báo lỗi vì array không nhận object 
## Object
- ex1: 

klet person = {
    name: 'nga',
    age: 21,
    inStudent: false
}
person.name = 'nu' //ok

person.name = 5 //Lỗi ko cùng type

## EXOLICIT TYPES
- ex1:

let student: string[] = ['a', 'b']


student.push(5) //lỗi

- ex2: union

let mixed: (string | number | boolean)[]

mixed = ['a', 5, true]

mixed.push(6) //ok

mixed.push('nga') //ok

mixed.push(false) //ok

- ex3: 

let id: number | string

id = '123' //ok

id = 123 //ok
 -ex4: 

 let hobby: 'book' | 'music'

 hobby = 'book' //ok
 
 hobby = 'cooking' // fail

 -ex5: object

 let person: object

 person = { name: 'nga', age: 21}

 person = []

 let student: {
    
    name: string,
    age: number,
    isGood: boolean,
 }

 student = { // phải khai báo đủ các phần tử
    name: 'nga',
    age: 21,
    isGood: true,
 }
## Type Alias
- tạo type mới từ những type đã có sẵn 
- Ex: 

type StringOrNumber = string | number;

type Student = {

    name: string; 

    id: StringorNumber}
}

const studentDetail = (

    id: StringOrNumber,

    studentName: string
): void => { // void: chỉ console.log, ko trả về j cho hàm này 

    console.log('Student ${studentName} has id: ${id}')

}
studentDetails(123, 'nga') 

const greet = (user: Student) => 

console.log('${user.name} with id ${user.id} say hi')

greet({name: 'nga', id: 1})
## Function Signature (chữ ký của function)
- Chữ ký là chấp nhận những dạng tham số là gì, trả kết quả là gì? 
- Ex:

let calculate: (a: number, b: number, c: string) => number // đây là chữ ký

calculate = (num1: number, num2: number, action: string) => 

action === 'add' ? num1 + num2 : num1 - num2 // nếu = add thì + num, nếu khác thì num1 - num2

console.log(calculate(4,2,'minus'))