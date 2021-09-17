
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.cssText = `
      background-color: #E1E1E1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.cssText = `
      background-color: transparent; 
    `;
    // document.getElementById("logo").style.fontSize = "35px";
  }
}
//*------------------------------------------------------------------------------*/
/* 1. Preloader
/*------------------------------------------------------------------------------*/
// makes sure the whole site is loaded
$(window).on("load",function() {
    // will first fade out the loading animation
 $("#preloader").fadeOut();
    // will fade out the whole DIV that covers the website.
 $("#status").fadeOut(9000);
})
//*------------------------------------------------------------------------------*/
/* 2. Play pop up
/*------------------------------------------------------------------------------*/

$(document).ready(function() {
$("#playbutton").on("click", function() {
    $("#videobox").fadeIn(0);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
});

$("#close-btn").on("click", function() {
    $("#videobox").fadeOut(0);
    $("#playbutton").show(0);
});
});