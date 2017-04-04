//Main Section
  
$(function() {
    $.scrollify({
        section : ".section-scroll",
    });
});
  
//Main Menu

$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

//Left circles

var delay = 0;
$('.block-item:lt(4)').each(function () {
  $(this).css({
    'transition': 'opacity .75s ease-in-out','-moz-transition':' opacity .75s ease-in-out','-webkit-transition': 'opacity .75s ease-in-out'
  });
  $(this).delay(delay).animate({opacity: '100'}, 1000);
  delay += 1000;

});

// Our Servics

  $(function() {
      $('#sti-menu').iconmenu();
  });
