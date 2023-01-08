// 1.Viết 1 function
// Có 1 tham số đầu vào là kiểu số
// Nếu là số chẵn, trả về giá trị của tham số x2
// Nếu là số lẻ, trả về giá trị của tham số x3
    function checkNumber(a) {
        if(a%2==0) console.log('a=',a*2)
        else       console.log('a=',a*3)
    }
    checkNumber(3);

// 2.Viết 1 function
// Đầu vào là 3 tham số ứng với điểm Toán - Lí - Hóa của sinh viên
// Tính điểm trung bình và trả về xếp hạng của sinh viên, biết tiêu chí xếp hạng dựa trên điểm trung bình như sau:
// [0, 4): Yếu
// [4, 6): Trung bình
// [6, 8): Khá
// [8, 10]: Giỏi
    function checkDiem(a,b,c) {     //a=DiemToan,b=DiemLy,c-DiemHoa
        var avg=(a+b+c)/3;
        if( avg>=0 && avg <4)          console.log('Yếu=',avg);
        else if ( avg>=4 && avg <6)    console.log('TB=',avg);
        else if ( avg>=6 && avg <8)    console.log('Khá=',avg );
        else if ( avg>=8 && avg <=10)  console.log('Gioi=',avg);
    }
    checkDiem(7,8,9);

// Viết 1 hàm có tham số là tháng, trả ra số ngày trong tháng đó.
// VD: countDay(1) -> 31; countDay(2) -> 28.
//     var month;

    