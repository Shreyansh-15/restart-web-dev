const btn = document.getElementById("myBtn");
const msg= document.getElementById("message");

btn.addEventListener("click", function() {
    msg.innerText = "Button clicked!";
    btn.innerText = "Clicked ✅";
});

