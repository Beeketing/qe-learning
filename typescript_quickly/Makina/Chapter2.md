# Basic and custom types
## Basic type annotations
### TypeScript offers the following type annotations:
- `string` - For textual data
- `boolean` - For true/false values
- `number` - For numeric values
  ```
  const name: string = "doan xem";
  const age: number = 30;
  const isTimeUp: boolean = ( age > 27 );
  if (isTimeUp) {
    console.log(age + "tuoi, gia roi lay chong di " + name);
  } else {
    console.log(age + "tuoi, van tre choi tiep di " + name);
  }
  ```

- `symbol` - A unique value created by calling the Symbol constructor, unique and immutable. Symbols are typically used to create unique keys for object properties.
  ```
  //Creates new symbol
  const co = Symbol('Loi chuc Tet cua co'); 
  const bac = Symbol('Loi chuc Tet cua bac'); 
  const loiChuc = {
    //Uses the symbol as an object’s property
    co: "Chuc nam nay nha co them nguoi them vui",
    bac: "Chuc nam nay cho bac an co cuoi nha"
  };
  console.log(loiChuc['co']); //This line prints "Chuc nam nay nha co them nguoi them vui"
  ```

- `any` - For variables that can hold values of various types, which may be unknown when you’re writing the code
- `unknown` - A counterpart of any, but no operations are permitted on an unknown without first asserting or narrowing it to a more specific type
- `never` - For representing unreachable code
  ```
  const layChong = () => {
    while (true) {
      //never end
      console.log("Thoi khong lay chong dau");
    }
  };
  console.log("Lay chong khong?");
  console.log(typeof(layChong)); // never
  ```

- `void` - An absence of a value. Unlike the never type, the void function does complete its execution, but it returns no value

### Special values:
- `null` - represents an intentional absence of value
  ```
  function chongOi(): string | null {
    let chong;
    return chong;
  }
  const goiChong = chongOi(); // -> null
  ```

- `undefined` - A variable that has not been assigned a value or A function that doesn’t return a value
  ```
  function chongOi() {
    let chong;
  }
  const goiChong = chongOi(); // -> undefined
  ```

## Defining custom types
- Using the type keyword: allows you to declare a new type or a type alias for an existing type
  ```
  type Age = number;
  type Patient = {
    name: string;
    yearOld: Age;
  }

  let patient_true: Patient = {
    name: "Makina",
    yearOld: 25
  }

  let patient_error: Patient = {
    name: "Makina"
  }
  ```

- Using classes as custom types
  ```
  class Patient = {
    name: string;
    yearOld: number;
  }

  class Person = {
    name: string;
    yearOld: number;
  }

  const p = new Patient();
  p.name = "Makina";
  p.yearOld = 25;

  const p1: Patient = new Person();
  ```

- Using interfaces as custom types
  ```
  interface Patient = {
    name: string;
    yearOld: number;
  }
  ```