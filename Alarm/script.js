
// setInterval(() => {
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();

//     if(second < 30) {
//         setTimeout(() => {
//             let audio = new Audio("./sounds/Jujutsu_Kaisen_AMV_《ANIMALS》(128k).mp3")
//             audio.play();
//         }, 5000);
//     }
// })

const form = document.getElementById("myForm");

form.addEventListener('submit', () => {


    const dateInput = document.getElementById("dateInput").value;
    const timeInput = document.getElementById("timeInput").value;
    
    const details = document.querySelector('h3')
    details.innerHTML = `${dateInput} : ${timeInput}`;
});
