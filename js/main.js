var now, firstshow, nextMonday, showday, countdownTimer, momentLocal;

firstshow = moment("01/13/2020 18:30:00", "MM-DD-YYYY HH:mm:ss");
// nextMonday = firstshow.recur().every(["Monday"]).daysofWeek();
nextshow();
countdownTimer = setInterval(nextshow, 1000);

function nextshow() {
	myMoment = moment.utc();
	momentLocal = myMoment.local(true);
	nextMonday = momentLocal.countdown(firstshow).toString();

	$("#show-countdown").html(nextMonday);

	// console.log(momentLocal);
}

// var guessTz = moment.tz.guess(true);
// console.log(guessTz);