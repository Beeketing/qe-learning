//Bai 1
function radom(min, max) {
  console.log('radom', Math.floor(Math.random() * (max - min)) + min);
  return;
}
radom(10, 20)
//Bai 2
var endDate = new Date("2023-01-22 00:00:00").getTime();
var check = setInterval(function () {
  var now = new Date().getTime();
  var distance = endDate - now;
  var day = Math.floor(distance / (24 * 60 * 60 * 1000));
  var hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((distance % (60 * 1000)) / 1000);
  console.log('còn', day, "ngày", hour, "giờ", minute, "phút", seconds, "giây");
  if (distance <= 0) {
    clearInterval(check);
  }
}, 1000);

//Bai 3
function demNgay(date) {
  var endDate = new Date(date).getTime();
  var check = setInterval(function () {
    var now = new Date().getTime();
    var distance = endDate - now;
    var day = Math.floor(distance / (24 * 60 * 60 * 1000));
    var hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((distance % (60 * 1000)) / 1000);
    console.log('còn', day, "ngày", hour, "giờ", minute, "phút", seconds, "giây");
    if (distance <= 0) {
      clearInterval(check);
    }
  }, 1000);
}
demNgay("2023-03-08 00:00:00");
//Bai 4
function bai2(string) {
  console.log(string.charAt(0).toUpperCase() + string.slice(1));

  return
}
bai2("phương mai");
//Bai 5
file = "file.txt";
function bai5(string) {
  var arr = string.split(".");
  console.log("file:  ", arr[arr.length - 1])
}
bai5(file)
//Bai 6
const set1 = new Set("12334");
console.log(set1);
//Bai 7
function checkPasswordStrength(password) {
  var strength = 0;
  var tips = "";
  if (password.length < 8) {
    tips += "mật khẩu <8 kí tự";
  } else {
    strength += 1;
  }
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Hoa thường ";
  }
  if (password.match(/\d/)) {
    strength += 1;
  } else {
    tips += "thiếu số  ";
  }
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "thiếu kí tự đặc biệt ";
  }

  if (strength < 2) {
    console.log(tips);
  } else if (strength === 2) {
    console.log(+ tips);
  } else if (strength === 3) {
    console.log(tips);
  } else {
    console.log("pass mạnh", tips);
  }
}
checkPasswordStrength("Mai 1 . ");
//Bai 8
var data = [
  {"title": "Book1", "author": "1"},
  {"title": "Book2", "author": "Surname2"},
  {"title": "Boo3", "author": "Name3Surname3"},
  {"title": "Book4", "author": "Name4Surname4"}
];
var lineArray = [["name1", 2, 3], ["name2", 4, 5], ["name3", 6, 7], ["name4", 8, 9], ["name5", 10, 11]];

 function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr)

  return array.map(it => {
    return Object.values(it).toString()
  }).join('\n')
}
console.log(
  convertToCSV(
    [
      {
        id: 1,
        name: 'Foo',
        age: 14
      },
      {
        id: 2,
        name: 'Bar',
         age: 15
      },
      {
        id: 3,
        name: 'Baz',
        age: 16
      }
    ]
  )
)
