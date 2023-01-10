// Bài 1: Viết hàm trình nhập vào min, max và output ra giá trị random trong khoảng [min, max]
// function getNumberRandom(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getNumberRandom(1,10));

//Bài 2: 
// function timeNow(endTime = "2023-01-22T00:00:00.000") {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//     let end = new Date(endTime).getTime(),
//       x = setInterval(function () {
//         let now = new Date().getTime(),
//             timeLeft = end - now;
//         let days = Math.floor(timeLeft / (day)),
//             hours = Math.floor((timeLeft % (day)) / (hour)),
//             minutes = Math.floor((timeLeft % (hour)) / (minute)),
//             seconds = Math.floor((timeLeft % (minute)) / second);

//         console.log('Còn ' + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + "giây nữa là đến tết")

//         if (timeLeft < 0) {
//           console.log('Happy New Year');
//           clearInterval(x);
//         }
//       }, 1000)                    
//   }
//   timeNow();
//Bài 3:
// function timeNow(endTime ) {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//     let end = new Date(endTime).getTime(),
//       x = setInterval(function () {
//         let now = new Date().getTime(),
//             timeLeft = end - now;
//         let days = Math.floor(timeLeft / (day)),
//             hours = Math.floor((timeLeft % (day)) / (hour)),
//             minutes = Math.floor((timeLeft % (hour)) / (minute)),
//             seconds = Math.floor((timeLeft % (minute)) / second);

//         console.log('Còn ' + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + "giây nữa là đến 8/3")

//         if (timeLeft < 0) {
//           console.log('Happy Woman Day 8/3');
//           clearInterval(x);
//         }
//       }, 1000)                    
//   }
//   timeNow(new Date("08-03-2023"));

// Bài 4
// function upText(string) {
//     var text = string.toLowerCase();
//     var newtext = text.charAt(0).toUpperCase() + text.slice(1);
//     console.log(newtext);
// }
// upText('aaaa aaaa')

// Bài 5  Viết hàm nhập vào tên file, trả ra đuôi của file đó
// // /* Bài 5*/
// function fileName(name) {
//   var pos = name.indexOf(".", 0);
//   console.log(pos);
//   var ict = name.substring(pos , name.length);
//   console.log(ict);
// }
// fileName("fiel.xls");
// Bài 6 Viết hàm chuyển số thành mảng các kí tự cấu thành nên số đó
// function tachSo(number){
//     var array = String(number).split("").map((number)=>{
//         return Number(number);
//       })
//       console.log(array)
// }
// tachSo(1232456)
// //Bài 7: 
//  Một ký tự chữ số viết hoa
// - Một ký tự chữ số viết thường
// - Một ký tự đặc biệt, thuộc hàng phím số: ~!@#$%^&*()
// - Độ dài ít nhất tám ký tự

// Hàm để tạo OTP
function generateOTP() {
    // Khai báo một biến chuỗi
    // nơi lưu trữ tất cả các chuỗi
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';
    // Tìm độ dài của chuỗi
    var len = string.length;
    for (let i = 0; i < 9; i++ ) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}
console.log("Mật khẩu : ")
console.log( generateOTP() );
