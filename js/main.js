var now, firstshow, nextMonday, showday, countdownTimer;

firstshow = moment("01/13/2020 18:30:00", "MM-DD-YYYY HH:mm:ss");
// nextMonday = firstshow.recur().every(["Monday"]).daysofWeek();
nextshow();
countdownTimer = setInterval(nextshow, 1000);

function nextshow() {
	nextMonday = moment().countdown(firstshow).toString();
	$("#show-countdown").html(nextMonday);
}

var guessTz = moment().tz.guess(true).countdown(firstshow).toString();
console.log(guessTz);