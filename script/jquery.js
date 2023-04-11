$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth < 768) {
    $(".tarif-container").slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      swipe: true,
      touchThreshold: 10,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  } else {
    $(".slick-slide").removeClass("slick-slide");
  }
});

$(window).resize(function () {
  var windowWidth = $(window).width();
  if (windowWidth >= 768) {
    $(".tarif-container").slick("unslick");
    $(".slick-slide").removeClass("slick-slide");
  } else {
    $(".tarif-container").not(".slick-initialized").slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      swipe: true,
      touchThreshold: 10,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});
