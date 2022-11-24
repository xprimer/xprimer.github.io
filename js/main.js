// Set content height

// Get navbar height
let navHeight = document.querySelector('#navbar').offsetHeight;

// console.log(navHeight); // Check navHeight value

// Set content wrapper height offset

let content = document.querySelector('.content-wrapper');
content.style.top = (navHeight - 0.4)+"px";

