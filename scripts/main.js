console.log("This is main.js");

var name = "Ricky Bruner";
var age = "Age: 29";
var bio = "I am just beginning the journey into the world of software programming. This page is a simple demonstration of what I have learned during the JumpStart Program with the Nashville Software School!";

$("#bio-div").append(`<h2><span id="name-plate">${name}</span></h2><h3><span id="age-plate">${age}</span></h3><p id="bio-plate">${bio}</p>`);

// var footerIcon = [
//   "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/2747/125355/social_media_icons.jpg",
//   "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/2747/125355/social_media_icons.jpg",
//   "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/2747/125355/social_media_icons.jpg",
//   "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/2747/125355/social_media_icons.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Linkedin_Shiny_Icon.svg/2000px-Linkedin_Shiny_Icon.svg.png"
// ]
// var footerIconNames = [
//   "Twitter",
//   "Facebook",
//   "Instagram",
//   "Pinterest",
//   "LinkedIn"
// ]

// var footerFunction = function(iconArray) {
//   for ( var i = 0; i < iconArray.length; i++);
//   $("#left-align-footer-div").append(`<img src="${footerIcon[i]}" alt="${footerIconNames[i]}">`)
  
// }
    
// $("#left-align-footer-div").ready(function(footerIcon)) 
    