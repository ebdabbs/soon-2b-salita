/**
 * Created by elizabethdabbs on 4/4/16.
 */
var deadline = 'March 11 2017 14:00:00 GMT-04:00';
function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor(t/(1000*60*60*24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes
    };
}

function initClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br' +
                'hours: ' + t.hours;
        if (t.total <= 0){
            clearInterval(timeinterval);
        }
    }, 1000);
}

initClock('clockdiv', deadline);