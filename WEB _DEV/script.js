let count = 0;

const Button = document.getElementById("myBtn");
const msg= document.getElementById("message");
const timePara = document.getElementById("time");

let clockInterval = null;
const clock = document.getElementById("liveClock");
const startBtn = document.getElementById("startClock");
const stopBtn = document.getElementById("stopClock");

startBtn.addEventListener("click", () =>{
    if (!clockInterval) {
        clockInterval = setInterval(() =>{
            clock.textContent = new Date().toLocaleTimeString();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    }
});
    
stopBtn.addEventListener("click", () => {
    clearInterval(clockInterval);
    clockInterval = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
});


Button.addEventListener("click", () =>{
    count++;

    const currentTime = new Date().toLocaleTimeString();
    msg.textContent = `Button clicked ${count} times`;
    timePara.textContent = `Current Time: ${currentTime}`;
});