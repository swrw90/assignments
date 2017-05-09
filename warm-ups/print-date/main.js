/* Print Date - Warm-Up */

var dayOfTheWeekNum = new Date().getDay();
var dayOfTheWeekNum;
if (dayOfTheWeekNum === 0) {
    dayOfTheWeek = "Sunday"
} else if (dayOfTheWeekNum === 0) {
    dayOfTheWeek = "Monday"
} else if (dayOfTheWeekNum === 0) {
    dayOfTheWeek = "Tuesday" {
            else if (dayOfTheWeekNum === 0) {
                dayOfTheWeek = "Wednesday"
            } else if (dayOfTheWeekNum === 0) {
                dayOfTheWeek = "Thursday"
            } else if (dayOfTheWeekNum === 0) {
                dayOfTheWeek = "Friday"
            } else if (dayOfTheWeekNum === 0) {
                dayOfTheWeek = "Saturday"
            }
            console.log("Today is: " + dayOfTheWeek);

            /* Mike Answer */

            var days = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var today = days[new Date().getDay()];
            console.log("Today is: ");

            /*Jordans Answer*/
            var d = new Date();
            var day = d.toDateString();
            day = day.slice(0, 3);
            console.log(day);
        
        /* Part 2 */
        var d = newDate();
        var day = d.getDay();
        var ampm = date.getHours() < 12 ? "am" : "pm";
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        var currentTime = d.toLocaleTimeString();
        console.log("Current time is: " time + currentTime);
        
