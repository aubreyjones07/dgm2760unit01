/*jslint node:true*/
"use strict";

/*global alert*/




function loadbnbImage() {
    
}


var companyTitle = "Joe's Bed and Breakfast";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Keepin' up with the Joeses.";
document.getElementById("slogan").innerHTML = companySlogan;







var askforName = prompt("Enter Your Name");


var myCup = "Welcome " + askforName;
document.getElementById("whatisyourname").innerHTML = myCup;




var myDateString = new Date();


var todaysDate = "Today's Date is: ";

document.getElementById("newdate").innerHTML = myDateString;



function myWindowResize() {
    var height = window.innerHeight, width = window.innerWidth, windowwidth = "My Window is " + width + " wide ";
    windowwidth += "and " + height + " long";
    document.getElementById("windowsize").innerHTML = windowwidth;
}

myWindowResize();






