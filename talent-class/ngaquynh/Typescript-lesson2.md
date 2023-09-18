# Lesson 2
## OPTIONAL AND NON NULL
- OPTIONAL : Cộng tham số không bắt buộc

// khi thêm dấu "?" vào sau biến thì b sẽ thành tham số không bắt buộc

const add = (a: number, b?: number) => (b ? a + b : a) // kiểm tra có b thì trả về a + b, không thì trả về a

console.log(add(1,2)) // => 3 

console.log(add(3))

- NONNULL

// thêm "!": ý là sau sẽ điền giá trị của b vào nma có thể không điền => ko báo lỗi 
const addNonNull = (a: number, b?: number) => a + b!

console.log(addNonNull(3,4)) // => 7

console.log(addNonNull(3)) // => NaN

## Class
 - public: thuộc tính đc truy cập và thay đổi từ bên ngoài 
 - private: thuộc tính ko truy cập và thay đổi giá trị từ bên ngoài
 - readonly: truy cập đc nma không thay đổi đc giá trị
- Ex1: 


class Employee{
 //Cách 1:
 -----------------
    public name: string
    private age: number
    readonly male: boolean


 constructor(n: string, a: number, m: boolean ){ // hàm khởi điểm
    
    this.name = n
    this.age = a
    this.male = m
}

 -----------------
//Cách 2:
constructor( // cần có dấu ","
    public name: string,

    private age: number,

    readonly male: boolean
){}

    //không đọc đc bên ngoài thì mình sẽ đọc bên trong bằng cách dùng print

    print(){

        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.male}`
        
    }
} 

const nga = new Employee('nga', 21, true)

console.log(nga.name) // => ok

console.log(nga.age) // => không cho truy cập vì là private

console.log(nga.male) // ok

nga.name = "ngaquynh" => ok

console.log(nga) // => Employee{ name: 'ngaquynh', age: 21, male: true}

nga.male = false // => không sửa đc vì là readonly

console.log(nga.print()) 

## MODULE

Export class từ file này để Import sang file khác
- Ở file class.ts:

export class Employee{
    .....

- Ở file module.ts:

import { Employee } from './class'

const nam = new Employee('nam', 25, false)
console.log(nam);

## INTERFACE


- Ex: 

interface person {

    name: string
    age: number
    speak(lang: string): void // không trả về giá trị nào
    spend(amount: number): number // trả về giá trị number
}

const nga: person = {

    name: 'nga',
    age: 21,
    speak(text: string): void {
        console.log(text)
    },
    spend(amt: number): number {
        return amt
    }
}

// console.log(nga)

const helloPerson = (onePerson: person) => 
    console.log(`hello ${onePerson.name}`);

helloPerson(nga)



