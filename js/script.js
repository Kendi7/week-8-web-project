const texts = document.querySelectorAll(".text"); const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => { button.addEventListener("click", function () { texts[index].classList.toggle("expanded"); })});