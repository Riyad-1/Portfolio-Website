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

$(document).ready(function() {
  var scrollLink = $(".scroll");

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});

// Change Current
// $(document).on("click", "li", function() {
//   $(this)
//     .addClass("active")
//     .siblings()
//     .removeClass("active");
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
