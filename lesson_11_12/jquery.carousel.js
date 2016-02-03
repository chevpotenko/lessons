﻿(function ($) {
  $.fn.carousel = function (params) {

    var defaults = {
      elemPerFrame: 5,
      widthElem: 100,
      marginRightElem: 25
    };
    var options = $.extend(options, params);

    this.prepend('<div class="carousel-arrow-left"><span>left</span></div>');
    this.append('<div class="carousel-arrow-right"><span>right</span></div>');

    var carouselWidth = ((options.widthElem + options.marginRightElem) * options.elemPerFrame) + 'px';
    var elementsList = this.find('ul');
    var elementCount = elementsList.find('li').length;    
    var pixelsOffset = options.widthElem + options.marginRightElem;
    var minimumOffset = -((elementCount - options.elemPerFrame) * pixelsOffset);
    var maximumOffset = 0;
    var currentLeftValue = 0;

    elementsList.parent('div').css({ width: carouselWidth });

    this.find('.carousel-arrow-left').click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += pixelsOffset;
        elementsList.animate({ left: currentLeftValue + 'px' }, 50);
      }
    });

    this.find('.carousel-arrow-right').click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left: currentLeftValue + 'px' }, 50);
      }
    });
    return this
  }
})(jQuery);