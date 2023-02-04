# Knows your problems space

## Điểm mấu chốt khi modeling data: 
  - Xác định và tạo entities?
  - Các entities có quan hệ với nhau không?
  - Quan hệ giữa chúng là quan hệ gì?

## Which connections among entities matter?
  - Connection nào nên được tạo ra
  - Đánh đổi giữa việc joins nhiều bảng với việc có nhiều connection?
  Side note: eliminate, simplify connection với [Facade pattern](#facade-pattern-structural-pattern)

## How do organizational units interact?
  > Conway's Law: Cách các elements trong hệ thống của một công ty kết nối với nhau thể hiện cách mà các bộ phận của công ty giao tiếp với nhau (tạm dic̣h =)))

## How much detail?
  - Biết được những thông tin nào là quan trọng đối với bài toán đang xử lý.
  - Lược bỏ và tối giản hóa những elements, đảm bảo thông tin, số lượng về connections giữa các entities không thay đổi (không thêm, không bớt)

## What shouldn't be stored?
Sensitive information, liên quan đến security


## What's next?
- Thay đổi nhỏ trong data model thay đổi lớn trong development, migration nên cần thiết kế trước để data model có thể thay đổi theo minor changes, adapt với requirement changes, (thay vì big update)

___

#### Facade pattern: Structural pattern
  - Situation:
    -  System có một complex sub-system
    - Nhiều logic xử lý (A, B, C) cần gọi đến nhiều function trong sub-system theo thứ tự nhất định (x->y->z)
    
    ```
    Exp:
      A -> [x->y->z]
      B -> [x->y->z]
      C -> [x->y->z]
      D -> [y->z]
      E -> [y->z]
      F -> [t->u]
    ```
    
  - Problems:
    - Khó maintain do dev cần hiểu rõ những function trong sub-system
    - Cần theo dṍi và update function A, B, C khi những function trong sub-system thay đổi
  - Solution:
    - Tạo facade: là một interface(api) trực tiếp gọi những function trong sub-system
    - Mục tiêu: abstract layer sub-system khỏi system chính
    
    ```
    Apply vào exp trên:
      FacadeY [y -> z]
      FacadeX [x -> FacadeY]
      FacadeT [t->u]
      A -> [FacadeX]
      B -> [FacadeX]
      C -> [FacadeX]
      D -> [FacadeY]
      E -> [FacadeY]
      F -> [FacadeT]
    ```
      
  - Result:
    - Loose coupling
    - Simplify code
    - Structural được rõ ràng, dễ maintain hơn
    
_Note: facade thường được tạo theo singleton pattern_
