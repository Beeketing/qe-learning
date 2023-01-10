function timer(endTime = "2023-01-22T00:00:00.000") {
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

      console.log('Còn ' + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + "giây nữa là đến tết")

      if (timeLeft < 0) {
        console.log('Happy new year!!!');
        clearInterval(x);
      }
    }, 1000)                    
}
timer();
