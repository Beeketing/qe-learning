/* 1 */
function checkOddEven(number) {
  if (number % 2 == 0) {
    console.log(number * 2);
  } else {
    console.log(number * 3);
  }
}
/* 2 */
function rankingStudent(math, phy, che) {
  var avg = (math + phy + che) / 3;
  if (avg >= 0 && avg < 4) {
    console.log("Yếu");
  } else if (avg >= 4 && avg < 6) {
    console.log("Trung binh");
  } else if (avg >= 6 && avg < 8) {
    console.log("Khá");
  } else console.log("Giỏi");
}
