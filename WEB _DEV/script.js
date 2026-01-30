let count = 0;

const Button = document.getElementById("myBtn");
const msg= document.getElementById("message");

Button.addEventListener("click", () =>{
    count++;
    msg.textContent = `Button clicked ${count} times`;
});