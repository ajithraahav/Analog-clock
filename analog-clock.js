function startTimer(){
    const current_time = new Date();
    // document.getElementById("timer").innerHTML = current_time.toLocaleTimeString('en-US');
    // document.getElementById("timer").innerHTML = current_time.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true });

    var minutes_deg = current_time.getMinutes() * 6;
    var seconds_deg = current_time.getSeconds() * 6;

    var hour_hand = current_time.getMinutes() / 2;
    
    function format12hours(date) {
        return date.getHours() % 12 || 12;
    }

    var hours_deg = format12hours(current_time) * 30;

    document.getElementById("hours_id").style.transform = 'rotate(calc('+hours_deg+'deg + '+hour_hand+'deg))';
    document.getElementById("seconds_id").style.transform = 'rotate('+seconds_deg+'deg)';
    document.getElementById("minutes_id").style.transform = 'rotate('+minutes_deg+'deg)';

}

setInterval(startTimer,1000);