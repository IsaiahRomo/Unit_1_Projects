"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Isaiah Romo
   Date:  1/21/20

   Filename:   ph_clock.js     

*/
// setting thr values for the variables
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;
// set intervals that the clocks runs every second
var clockID = setInterval("countdown()", 1000);
// function for the clock to run and countdown to 0
function countdown(){
   var minsLeft = Math.floor(timeLeft / 60);
   var secsLeft = timeLeft - (60 * minsLeft);
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").textContent = minsString;
   document.getElementById("seconds").textContent = secsString;
   checkTimer();
   timeLeft --;
}
// stops the clock
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br /> (Order Expired)");
   clearInterval(clockID);
}



/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
