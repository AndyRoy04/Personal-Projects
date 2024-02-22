const form = document.getElementById("myForm");
const setTime = document.getElementById('time');
const setDate = document.getElementById('date');
const timeInput = document.getElementById("timeInput").value;
const details = document.querySelector('h3')

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayString = date.toDateString().slice(0, 3);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    setTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    setDate.innerHTML = `${date.toDateString()}`;

})

document.getElementById('playsound').addEventListener('click', function () {

    var audio = new Audio("./sounds/Karatenai(128k).mp3");
    audio.play();
    setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
    }, 10000);
});
