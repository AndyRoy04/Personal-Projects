// Setting HTML input element
const form = document.getElementById("myForm");
const setTime = document.getElementById('time');
const setDate = document.getElementById('date');
const timeInput = document.getElementById("timeInput").value;
const details = document.querySelector('h3')

// Setting script variables to be used
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

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


    form.addEventListener('submit', function (event) {
        event.preventDefault();

    
        const timeInput = document.getElementById("timeInput").value;
        let alarmHour = timeInput.slice(0, 2);
        let alarmMin = timeInput.slice(3, 5);
        
        details.innerHTML = `${alarmHour} and ${alarmMin}`;
        if(alarmHour === hours && alarmMin === minutes){
            playSound(); // still can't play the sound correctly
        }
    })
});

// Play song function
function playSound(){ 
    var audio = new Audio("./sounds/Karatenai(128k).mp3");
    audio.play();
    setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
    }, 10000);
}
