$(document).ready(function() {
  function toggleMenu() {
    var windowWidth = $(window).width();
    if (windowWidth >= 0) {
      $(".menu").toggleClass("show");
      $("body").toggleClass("menu-open");
      $(".hamburger-menu").toggleClass("hide");
      $(".close-menu").toggleClass("show");
    }
  }

function closeMenu() {
  var windowWidth = $(window).width();
  if (windowWidth >= 0) {
    $(".menu").removeClass("show");
    $("body").removeClass("menu-open");
    $(".hamburger-menu").removeClass("hide");
    $(".close-menu").removeClass("show");
  }
}

$(document).on("click", ".hamburger-menu", function() {
  toggleMenu();
});

$(document).on("click", ".close-menu", function() {
  closeMenu();
});

$(".menu a").on("click", function() {
  closeMenu();
});

// Close the menu when clicking outside of it
$(document).on("click", function(event) {
  var target = $(event.target);
  if (!target.closest(".menu").length && !target.closest(".hamburger-menu").length) {
    closeMenu();
  }
});

// Close the menu on window resize
$(window).on("resize", function() {
  closeMenu();
});
});

// go to top button
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.go-to-top').fadeIn();
    } else {
      $('.go-to-top').fadeOut();
    }
  });

  $('.go-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// prevent right-click - right click
// window.addEventListener('contextmenu', function (e) {
//         e.preventDefault();
//     });