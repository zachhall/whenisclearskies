var now, firstshow, nextMonday, showday, countdownTimer;

firstshow = moment("01/13/2020 6:30:00 PM", "MM-DD-YYYY HH:mm:ss");
// nextMonday = firstshow.recur().every(["Monday"]).daysofWeek();
nextshow();
countdownTimer = setInterval(nextshow, 1000);

function nextshow() {
	nextMonday = moment().countdown(firstshow).toString();
	$("#show-countdown").html(nextMonday);
}

// console.log(nextMonday);