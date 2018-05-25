$('#monitor').html($(window).width());

$(window).resize(function () {
  var viewportWidth = $(window).width();
  $('#monitor').html(viewportWidth);
});



$('.navbar__ul a').click(function () {
  $('.collapse').collapse('hide');
});



// $('.navbar__ul a').on('click', function () {
//   $('.collapse').click(); //bootstrap 2.x
//   $('.navbar-toggle').click() //bootstrap 3.x by Richard
// });


var onResize = function () {
  // apply dynamic padding at the top of the body according to the fixed navbar height
  $("body").css("padding-top", $(".lp-navbar").height());
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function () {
  onResize();
});
