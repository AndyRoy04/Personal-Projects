const form = document.getElementById("myForm");
const dateInput = document.getElementById("dateInput").value;
const timeInput = document.getElementById("timeInput").value;
const details = document.querySelector('h3')

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    details.innerHTML = `${year}: ${month}`;

})
// document.getElementById('playsound').addEventListener('click', function(){
//     playSound(10000);    
// });

// function playSound(time) {
//     var audio = new Audio("./sounds/Karatenai(128k).mp3");
//     audio.play();
//     setTimeout(function() {
//         audio.pause();
//         audio.currentTime = 0;
//     }, time);
// }
