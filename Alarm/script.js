
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(second < 30) {
        setTimeout(() => {
            let audio = new Audio("./sounds/Jujutsu_Kaisen_AMV_《ANIMALS》(128k).mp3")
            audio.play();
        }, 5000);
    }
})