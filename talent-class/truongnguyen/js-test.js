/* Bài 1*/
function TaoSoNgauNhien(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(TaoSoNgauNhien(1, 10));

/* Bài 2*/

function timer(endTime = "2023-01-22T00:00:00.000") {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let end = new Date(endTime).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        timeLeft = end - now;

      let days = Math.floor(timeLeft / day),
        hours = Math.floor((timeLeft % day) / hour),
        minutes = Math.floor((timeLeft % hour) / minute),
        seconds = Math.floor((timeLeft % minute) / second);

      console.log(
        "Còn " +
          days +
          " ngày " +
          hours +
          " giờ " +
          minutes +
          " phút " +
          seconds +
          "giây nữa là đến tết"
      );

      if (timeLeft < 0) {
        console.log("Tết đến r!!");
        clearInterval(x);
      }
    }, 1000);
}
timer();

/* Bài 3*/
function timer(endTime) {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let end = new Date(endTime).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        timeLeft = end - now;

      let days = Math.floor(timeLeft / day),
        hours = Math.floor((timeLeft % day) / hour),
        minutes = Math.floor((timeLeft % hour) / minute),
        seconds = Math.floor((timeLeft % minute) / second);

      console.log(
        "Còn " +
          days +
          " ngày " +
          hours +
          " giờ " +
          minutes +
          " phút " +
          seconds +
          "giây nữa là đến mùng 8/3"
      );

      if (timeLeft < 0) {
        console.log("Đến r này!!");
        clearInterval(x);
      }
    }, 1000);
}
timer(new Date("2023-03-08"));

/* Bài 4 */
function vietHoaChuCaiDau(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
vietHoaChuCaiDau("anmmnmc");

// /* Bài 5*/
function fimeType(filename) {
  var pos = filename.indexOf(".", 0);
  console.log(pos);
  var ict = filename.substring(pos, filename.length);
  console.log(ict);
}
fimeType("name.txt");

/* Bài 6*/
var number = 235345;
function sliceNumber(number) {
  var myArr = String(number)
    .split("")
    .map((number) => {
      return Number(number);
    });

  console.log(myArr);
}
sliceNumber(number);

/* Bài 7 */
function randomPassword() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var uppCha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spChar = "~!@#$%^&*()";
  var num = "0123456789";
  var string_length = 8;

  var randomstring = "";
  for (var i = 0; i < string_length - 3; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  randomstring += spChar.substring(1, 1 + 1);
  randomstring += num.substring(1, 1 + 1);
  randomstring += uppCha.substring(1, 1 + 1);
  console.log(randomstring);
}
randomPassword();

/* Bài 8*/

    function csvToJSON() {
    var csv =  [{"id":1,"name":"Phong","age":15},{"id":2,"name":"Lan","age":20}];
    var lines = csv.split("\n");
    var result = [];
    var headers;
    headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};

        if (lines[i] == undefined || lines[i].trim() == "") {
        continue;
        }

        var words = lines[i].split(",");
        for (var j = 0; j < words.length; j++) {
        obj[headers[j].trim()] = words[j];
        }

        result.push(obj);
    }
    console.log(result);
    }
    
