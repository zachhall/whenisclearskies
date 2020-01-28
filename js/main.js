var now, firstshow, endShow, nextShow, nextMonday, showday, countdownTimer, everyMon;

firstshow = moment.tz("02/03/2020 18:20:00", "MM-DD-YYYY HH:mm:ss", "America/Los_Angeles");
endShow = moment.tz("02/03/2020 21:30:00", "MM-DD-YYYY HH:mm:ss", "America/Los_Angeles")
nextShow = moment.tz("02/10/2020 18:30:00", "MM-DD-YYYY HH:mm:ss", "America/Los_Angeles");

countdownToShow1();
myMoment = moment();

if (myMoment.isBefore(firstshow)) {
	$("div.nonlive").removeClass("hidden");
	$("div.live").addClass("hidden");
	countdownTimer = setInterval(countdownToShow1, 1000);
} else if (myMoment.isAfter(firstshow) && myMoment.isBefore(endShow)) {
	$("div.nonlive").addClass("hidden");
	$("div.live").removeClass("hidden");
} else {
	$("div.nonlive").removeClass("hidden");
	$("div.live").addClass("hidden");
	countdownTimer = setInterval(countdownToShow2, 1000);
}

function countdownToShow1() {
	myMoment = moment();
	nextMonday = myMoment.countdown(firstshow).toHTML();

	$("#show-countdown").html(nextMonday);
}

function countdownToShow2() {
	myMoment = moment();
	nextMonday = myMoment.countdown(nextShow).toHTML();

	$("#show-countdown").html(nextMonday);
}