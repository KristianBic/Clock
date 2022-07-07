function showTime(){

    let date = new Date();
    let years = date.getFullYear();
    let months = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let dayInWeek = date.getDay();

    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    
    if(hours < 10) {hours = '0' + hours}
    if(minutes < 10) {minutes = '0' + minutes}
    if(seconds < 10) {seconds = "0" + seconds}

    //if hours are smaller than 10, we put 0 before number
    let checkZeros = x => {
        if (x < 24) return x < 10 ? x = '0' + x : x; 
        else {
            x -= 24;
            return x < 10 ? x = '0' + x : x; 
        } 
    }
    let foreignTime = hours => `${checkZeros(hours)}:${minutes}`

    let currentTimeFormat = `${hours}:${minutes}:${seconds}`
    let dateFormat = `${weekdays[dayInWeek]}, ${days}.${months}.${years} `

    document.getElementById("displayTimeInDays").textContent = currentTimeFormat;
    document.getElementById("displayTimeInYear").textContent = dateFormat;
    document.getElementById("losAngelesTime").textContent = foreignTime(hours-9);
    document.getElementById("newYorkTime").textContent = foreignTime(hours-6);
    document.getElementById("londonTime").textContent = foreignTime(hours-1);
    document.getElementById("parizTime").textContent = foreignTime(hours);
    document.getElementById("kyjevTime").textContent = foreignTime(hours+1);
    document.getElementById("pekingTime").textContent = foreignTime(hours+6);
    document.getElementById("tokioTime").textContent = foreignTime(hours+7);
    document.getElementById("Title").textContent = 'CurrTime - ' + foreignTime(hours);

    setTimeout(showTime, 1000);
}
showTime();
