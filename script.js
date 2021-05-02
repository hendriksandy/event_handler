// const alarmButton = document.querySelector("#mybutton");
// alarmButton.addEventListener("click", function () {
//     alert("button clicked");
// });


const alarmButton = document.querySelector(".btn-alert")
alarmButton.addEventListener("click", function () {
    alert("button clicked!");
});

// const alarmButton = document.getElementById("mybutton");
// alarmButton.addEventListener("click", function () {
//     alert("button clicked!");
// });








const alarmButton2 = document.querySelector(".blue-background button:nth-child(2)");



// alarmButton2.addEventListener("click", function () {
//     document.body.classList.add("red-background");
// });

alarmButton2.addEventListener("click", function () {
    document.body.classList.toggle("red-background");
});