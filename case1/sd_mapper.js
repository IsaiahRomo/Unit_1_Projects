"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Isaiah Romo
   Date:   1/16/20

*/
var thisTime = new Date();
// gets today's date
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour)% 24;
// insert the mapNum value to the img so that it select a certain img at that time
var imgStr = "<img src='sd_sky" + mapNum +  ".png' />";
// insert the value imgStr directly after the element's opening tag
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);