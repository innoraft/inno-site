(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {

      // Set current width and height.
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('.item-main-block').height(viewportHeight);
      $('.item-main-block').width(viewportWidth);

      $('.menu-block').height(viewportHeight);
      $('.menu-block').width(viewportWidth);

      // Make header sticky.
      $(window).scroll(function() {
        if ($(this).scrollTop() > 58){  
          $('.header').addClass("sticky");
        }
        else{
          $('.header').removeClass("sticky");
        }
      });

      // Theme sticky header.
      $(window).scroll(function() {
        if ($(this).scrollTop() > viewportHeight){  
          $('.header').css({
            'background-color': '#FFFFFF',
            'border-bottom': '1px solid rgba(0, 0, 0, 0.1)',
          });
          $('.site-logo').css('color', '#343434');
          $('.menu-button').css('margin-top', '6px');
          $('.menu-button span').css('background-color', '#888');
        }
        else{
          $('.header').css({
            'background-color': 'transparent',
            'border-bottom': 'none',
          });
          $('.site-logo').css('color', '#ffffff');
          $('.menu-button').css('margin-top', '14px');
          $('.menu-button span').css('background-color', '#e5e5e5');
        }
      });

      // Display menu.
      $('.menu-button').click(function() {
        if (!$('.menu-block').hasClass('menu-open')) {
          $('.menu-block').animate({top: '0%'}, 500);
          // Add class.
          $('.menu-block').addClass("menu-open");
        } else {
          $('.menu-block').animate({top: '-100%'}, 500);
          // Remove class.
          $('.menu-block').removeClass("menu-open");
        }
      });

      // JS effect on menu button.
      $('.menu-button').click(function() {
        if ($('.menu-block').hasClass('menu-open')) {
          $('.menu-button .top').addClass('menu-button-top');
          $('.menu-button .middle').addClass('menu-button-middle');
          $('.menu-button .bottom').addClass('menu-button-bottom');
        } else {
          $('.menu-button .top').removeClass('menu-button-top');
          $('.menu-button .middle').removeClass('menu-button-middle');
          $('.menu-button .bottom').removeClass('menu-button-bottom');
        }
      });

      // Make item blocks slider.
      $('.inner-block').first().addClass('current-item');
      $('.inner-block').first().css('z-index', '5');

      function item_info_back(currentItem) {
        if (currentItem.hasClass('projects')) {
          $('.item-info-block').css('background-color', '#4e788e');
        } else if (currentItem.hasClass('services')) {
          $('.item-info-block').css('background-color', '#565b66');
        } else if (currentItem.hasClass('blogs')) {
          $('.item-info-block').css('background-color', '#008da6');
        }
      }

      function item_info(currentItem) {
        $(currentItem).promise().done(function() {
          if (currentItem.hasClass('projects')) {
            $('.info-block').hide();
            $('.projects.info-block').css('display', 'inline-block');
          } else if (currentItem.hasClass('services')) {
            $('.info-block').hide();
            $('.services.info-block').css('display', 'inline-block');
          } else if (currentItem.hasClass('blogs')) {
            $('.info-block').hide();
            $('.blogs.info-block').css('display', 'inline-block');
          }
        });
      }

      function next_block() {
        // Get current and next item.
        var currentItem = $(".item-block").find('.current-item');
        var nextItem;
        if(currentItem.next().length > 0) {
          nextItem = currentItem.next();
        } else {
          nextItem = $('.inner-block').first();
        } 
        // Move items.
        nextItem.css({'top': 'auto', 'bottom': '-100%', 'z-index': '5'});
        currentItem.animate({bottom: '100%'}, 600);
        nextItem.animate({bottom: '0%'}, 600);
        // Add and remove class.
        currentItem.removeClass("current-item");
        nextItem.addClass("current-item");
        // Change background of item info block.
        item_info_back(nextItem);
        // Change info of item info block.
        item_info(nextItem);
      }

      function previous_block() {
        // Get current and previous item.
        var currentItem = $(".item-block").find('.current-item');
        var prevItem;
        if(currentItem.prev().length > 0) {
          prevItem = currentItem.prev();
        } else {
          prevItem = $('.inner-block').last();
        } 
        // Move items.
        prevItem.css({'bottom': 'auto', 'top': '-100%', 'z-index': '5'});
        currentItem.animate({top: '100%'}, 600);
        prevItem.animate({top: '0%'}, 600);
        // Add and remove class.
        currentItem.removeClass("current-item");
        prevItem.addClass("current-item");
        // Change background of item info block.
        item_info_back(prevItem);
        // Change info of item info block.
        item_info(prevItem);
      }

      var intervalID = null;
      intervalID = window.setInterval(next_block, 5000);

      // Move to next element.
      $('.item-next').click(function() {
          next_block();
          clearInterval(intervalID);
          intervalID = window.setInterval(next_block, 5000);
      });

      // Move to previous element.
      $('.item-prev').click(function() {
          previous_block();
          clearInterval(intervalID);
          intervalID = window.setInterval(next_block, 5000);
      });

    }
  };
})(jQuery);
