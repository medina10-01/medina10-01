function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    let hourString = (hour < 10) ? "0" + hour.toString() : hour.toString();
    let minuteString = (minute < 10) ? "0" + minute.toString() : minute.toString();
    let secondString = (second < 10) ? "0" + second.toString() : second.toString();
  
    let timeString = `${hourString}:${minuteString}:${secondString}`;
  
    let timeDisplay = document.querySelector(".time");
    timeDisplay.textContent = timeString;
  
    let hourDegrees = (hour / 12) * 360 + (minute / 60) * 30 + 90;
    let minuteDegrees = (minute / 60) * 360 + (second / 60) * 6 + 90;
    let secondDegrees = (second / 60) * 360 + 90;
  
    let hourHand = document.querySelector(".hour");
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
    let minuteHand = document.querySelector(".minute");
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  
    let secondHand = document.querySelector(".second");
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }
  
  setInterval(updateClock, 1000);
  