// Bai 1:
function TaoSoNgauNhien(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
console.log(TaoSoNgauNhien(2,9))

//Bai 2
function getCountdown(){
    var countDownDate = new Date("Jan 23, 2023 00:00:00").getTime();
    var now = new Date().getTime();   
      var countDown = (countDownDate - now)/1000;
      var days = Math.floor(countDown /(60 * 60 * 24));
      var hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
      var minutes = Math.floor((countDown % (60 * 60)) / 60);
      var seconds = Math.floor(countDown % 60);
    
    console.log(" Còn " + days + " ngày " + hours + " giờ "  + minutes + " phút " + seconds + " giây là đến tết");
};
setInterval(getCountdown, 1000);

// Bai 3
function getCountdown(){
    var countDownDate = new Date("Mar 8, 2023 00:00:00").getTime();
    var now = new Date().getTime();   
      var countDown = (countDownDate - now)/1000;
      var days = Math.floor(countDown /(60 * 60 * 24));
      var hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
      var minutes = Math.floor((countDown % (60 * 60)) / 60);
      var seconds = Math.floor(countDown % 60);
    
    console.log(" Còn " + days + " ngày " + hours + " giờ "  + minutes + " phút " + seconds + " giây là đến 8-3");
};
setInterval(getCountdown, 1000);

// Bai 4
let str = 'hÀ Nội';
let txt = str.toLowerCase();
let newtxt= txt.charAt(0).toUpperCase() +   txt.slice(1); 
console.log(newtxt);

// Bai 5
const fileName = 'abc.docs.txt';
const lastIdx = fileName.lastIndexOf('.');
if (lastIdx === -1) {
  console.log('none');
} else {
  const result = fileName.slice(lastIdx + 1);
  console.log(result);
}

// Bai 6
const num = 16081997;
const txt = num.toString();
const result = txt.split('');
console.log(result);

// Bai 7
