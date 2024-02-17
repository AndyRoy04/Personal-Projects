const body = document.querySelector('body');
const strong = document.querySelector('strong');
const lastParagraph = document.querySelector('.second');
const svg = document.querySelector('.first'); 
const text = document.querySelector('h3');

// setInterval Permits the clock to run infinitely
setInterval(() => {
    let time = document.querySelector('h2')
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    time.innerHTML = hour + ":" + minute + ":" + second;
    strong.innerHTML = hour;

    if(hour >= 22 || hour < 6){
        text.innerHTML = 'Get some rest 🛌🏿';
    }else if(hour >= 6 && hour <10){
        text.innerHTML = 'Time to be yourself 😁';
    } else if(hour >= 10 && hour < 22){
        text.innerHTML = "It's time to Work 💻"
    }
    else{
        text.innerHTML = 'wcdedwec'
    }

    if (hour >= 6 && hour < 18) {
        body.classList.remove('dark')
        svg.classList.add('sun')
        lastParagraph.innerHTML = "Day Light"
        svg.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'
    } else {
        body.classList.add('dark')
        lastParagraph.innerHTML = "Dark theme"
        svg.classList.add('grey')
        svg.innerHTML = '<i class="bi bi-moon-stars-fill"></i>'
    }

    

});

