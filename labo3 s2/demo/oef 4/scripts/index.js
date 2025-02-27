const button = document.getElementById("tButton");
button.addEventListener("click", function() {
    button.classList.toggle("blauw");
})

const button2 = document.getElementById("tButton2");
button2.addEventListener("click", function() {
    button2.classList.toggle("blauw");
})

const button3 = document.getElementById("tButton3");
button3.addEventListener("click", function() {
    button3.classList.toggle("blauw");
})

window.addEventListener("load", setup);