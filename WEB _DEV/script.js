let count = 0;

const Button = document.getElementById("myBtn");
const msg= document.getElementById("message");
const timePara = document.getElementById("time");

Button.addEventListener("click", () =>{
    count++;

    const currentTime = new Date().toLocaleTimeString();
    
    msg.textContent = `Button clicked ${count} times`;
    timePara.textContent = `Current Time: ${currentTime}`;
});