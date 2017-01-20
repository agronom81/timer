/*!
 * timer.js v1.0
 * https://github.com/agronom81/timer
  */
	 'use strict';

	 function getTimeRemaining(endtime){
	  	var t = Date.parse(endtime) - Date.parse(new Date());
	  	var seconds = Math.floor( (t/1000) % 60 );
	  	var minutes = Math.floor( (t/1000/60) % 60 );
	  	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	  	var days = Math.floor( t/(1000*60*60*24) );
	  	return {
	   		'total': t,
	   		'days': days,
	   		'hours': hours,
	   		'minutes': minutes,
	   		'seconds': seconds
	  	};
	}
	function initializeClock(clock){
	  	var endtime =  clock.getAttribute('data-endtime');
	  	var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
	  	function updateClock(){
		    var t = getTimeRemaining(endtime);
		    daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		    if(t.total<=0){
		     clearInterval(timeinterval);
		    }
	  }

	  updateClock(); 
	  var timeinterval = setInterval(updateClock,1000);
	}
	function viewClock(className) {
		var targets = document.getElementsByClassName(className);
		for(var i = 0; i < targets.length; i++) {
			initializeClock(targets[i]);
		}
	}
