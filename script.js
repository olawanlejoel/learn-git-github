let countDownDate = new Date('Jan 01, 2023 00:00:00').getTime();

let x = setInterval(() => {
	let currentTime = new Date().getTime();

	let distance = countDownDate - currentTime;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (days < 10) {
		days = '0' + days;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	document.querySelector('.days').innerHTML = days;
	document.querySelector('.hours').innerHTML = hours;
	document.querySelector('.minutes').innerHTML = minutes;
	document.querySelector('.seconds').innerHTML = seconds;

	if (distance < 0) {
		clearInterval(x);
		document.querySelector('.days').innerHTML = '0';
		document.querySelector('.hours').innerHTML = '0';
		document.querySelector('.minutes').innerHTML = '0';
		document.querySelector('.seconds').innerHTML = '0';
	}
}, 1000);
