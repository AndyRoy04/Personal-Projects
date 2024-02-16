const body = document.querySelector('body');
const strong = document.querySelector('strong');
const lastParagraph = document.querySelector('.second'); 

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

    if (hour >= 6 && hour < 18) {
        body.classList.remove('dark')
        lastParagraph.innerHTML = " Day Light"
    } else {
        body.classList.add('dark')
        lastParagraph.innerHTML = " Dark Time"
    }

    

});

