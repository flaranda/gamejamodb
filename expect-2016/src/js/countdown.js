$( document ).ready( () => {
    var flash = ":";
    var end = new Date( "2015-12-14T14:00:00" );
    var tickets = $( ".expectation-tickets" ).clone();

    $( ".expectation-tickets" ).remove();

    if( ( new Date() ) - end >= 0 ) {
        $( "#countdown" ).parent().append( tickets );
        $( "#countdown" ).remove();
        $( ".expectation-tickets" ).show();
    }
    else {
        countdown( end, ( t ) => {
            if( ( new Date() ) - end >= 0 ) {
                $( "#countdown" ).parent().append( tickets );
                $( "#countdown" ).remove();
                $( ".expectation-tickets" ).show();
            }
            else {
                t.days = t.days.toString().length <= 1 ? "0" + t.days.toString() : t.days;
                t.hours = t.hours.toString().length <= 1 ? "0" + t.hours.toString() : t.hours;
                t.minutes = t.minutes.toString().length <= 1 ? "0" + t.minutes.toString() : t.minutes;
                t.seconds = t.seconds.toString().length <= 1 ? "0" + t.seconds.toString() : t.seconds;

                if( flash == ":" ) {
                    flash = " ";
                }
                else {
                    flash = ":";
                }

                $( "#countdown" ).html( t.days + flash + t.hours + flash + t.minutes + flash + t.seconds );
            }
        }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS );
    }
});
