function timer(endTime = "2023-03-08T00:00:00.000") {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    let end = new Date(endTime).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          timeLeft = end - now;
  
        let days = Math.floor(timeLeft / (day)),
          hours = Math.floor((timeLeft % (day)) / (hour)),
          minutes = Math.floor((timeLeft % (hour)) / (minute)),
          seconds = Math.floor((timeLeft % (minute)) / second);
  
        console.log('Còn ' + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + "giây nữa là đến 8/3/2023")
  
        if (timeLeft < 0) {
          console.log('Chuc mung ngay quoc te phu nu');
          clearInterval(x);
        }
      }, 1000)                    
  }
  timer();
  