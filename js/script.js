var count = 0;
var doTimer = 0;
var timer;
var h, m, s, ms;

start_button.addEventListener( 'click', start );
stop_button.addEventListener( 'click', stop );

function start() {
    if (doTimer == 0)
        startTimer()
    else
        pause ()
};

function startTimer() {
    start_button.innerHTML = 'PAUSE';
    start_button.style.backgroundColor = '#3d57b1';
    doTimer = 1;
    timer = setInterval (function () {
      count++;
      ms = count%100;
      if (ms<10) {
				msec.innerHTML = "0"+ms}
			else {
				msec.innerHTML = ms;
			};
			s = parseInt(count/100)%60;
      if (s<10) {
				sec.innerHTML = "0"+s}
				else {
					sec.innerHTML = s
					};
      m = parseInt(count/6000)%60;
      if (m<10) {
				min.innerHTML = "0"+m}
			else {
				min.innerHTML = m
			};
      h = parseInt(count/360000)%24;
      if (h<10) {
				hours.innerHTML = "0"+h}
			else {
				hours.innerHTML = h
			};
    }, 10);
};
function pause() {
    clearInterval(timer);
		start_button.innerHTML = 'CONTINUE';
		start_button.style.backgroundColor = '#b2d649';
    doTimer = 0;
};
function stop() {
  clearInterval(timer);
	start_button.innerHTML = 'START';
	doTimer = 0;
	count = 0;
	hours.innerHTML = '00';
	min.innerHTML = '00';
	sec.innerHTML = '00';
	msec.innerHTML = '00';
}
