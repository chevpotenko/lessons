(function ($) {  

  $.fn.carousel = function (params) {

    var defaults = {
      elemPerFrame: 5,
      widthElem: 100,
      marginRightElem: 25
    };

    var options=$.extend(options, params);   
    
    this.prepend('<div class="carousel-arrow-left"><span>left</span></div>');
    this.append('<div class="carousel-arrow-right"><span>right</span></div>');

    var leftUIEl = this.find('.carousel-arrow-left');
    var rightUIEl = this.find('.carousel-arrow-right');
    
    var carouselWidth = ((options.widthElem + options.marginRightElem) * options.elemPerFrame) + 'px';

    var elementsList = this.find('ul');
    elementsList.parent('div').css({ width: carouselWidth });

    //elementsList.children('li').css({
    //  width: (options.widthElem) + 'px',
    //  marginRight: (options.marginRightElem) + 'px'
    //});
    
    var pixelsOffset = options.widthElem + options.marginRightElem;
    var currentLeftValue = 0;

    elementCount = elementsList.find('li').length;
    var minimumOffset = -((elementCount - options.elemPerFrame) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += pixelsOffset;    
        elementsList.animate({ left: currentLeftValue + 'px' }, 50);
      }
    });

    rightUIEl.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left: currentLeftValue + 'px' }, 50);
      }
    });

    return this
  }
})(jQuery);