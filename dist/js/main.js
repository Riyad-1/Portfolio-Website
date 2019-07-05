// document.addEventListener("DOMContentLoaded", init);

// function init() {
//   let query = window.matchMedia("(min-width: 501px)");

//   if (query.matches) {
//   } else {
//   }
// }

// Sticky menu background
$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 400) {
      $("nav").addClass("fixed-nav");
    } else {
      $("nav").removeClass("fixed-nav");
    }
  });
});

// Change Current
// $(document).on("click", "a", function() {
//   $(this)
//     .addClass("current")
//     .siblings()
//     .removeClass("current");
// });

// Smooth Scrolling
$("#main-nav a, #btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 150
      },
      1500
    );
  }
});
