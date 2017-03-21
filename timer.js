/*!
 * timer.js v1.1
 * https://github.com/agronom81/timer
 */

    'use strict';

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(clock) {

        var endtime = clock.getAttribute('data-endtime');
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            if (secondsSpan) {
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            }
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        function createEmptyClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = "0";
            hoursSpan.innerHTML = "0";
            minutesSpan.innerHTML = "0";
            if (secondsSpan) {
                secondsSpan.innerHTML = "0";
            }
        }

        if (endtime) {
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        } else {
            createEmptyClock();
        }

    }

    function viewClock(className) {
        var targets = document.getElementsByClassName(className);
        var str = '<span><span class="days"></span> days <span class="hours"></span>h <span class="minutes"></span>m <span class="seconds"></span>s</span>';

        for (var i = 0; i < targets.length; i++) {
            targets[i].innerHTML = str;
            initializeClock(targets[i]);
        }
    }
