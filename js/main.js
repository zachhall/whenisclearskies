var now, firstshow, nextMonday, showday, countdownTimer, momentLocal;

firstshow = moment.tz("01/13/2020 18:30:00", "MM-DD-YYYY HH:mm:ss", "America/Los_Angeles");
// nextMonday = firstshow.recur().every(["Monday"]).daysofWeek();
nextshow();
countdownTimer = setInterval(nextshow, 1000);

function nextshow() {
	myMoment = moment();
	nextMonday = myMoment.countdown(firstshow).toString();

	$("#show-countdown").html(nextMonday);

	// console.log(momentLocal);
}