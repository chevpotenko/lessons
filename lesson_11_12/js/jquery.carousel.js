(function ($) {
	$.fn.carousel = function (params) {

		var carousel = $(this);
		var list = carousel.find('ul');
		var pixelsOffset;
		var minimumOffset;
		var maximumOffset = 0;
		var currentLeftValue;

		var defaults = {
			marginFrame: 20,
			slidePerFrame: 1,
			marginSlide: 15,
		};
		var options = $.extend(defaults ,params );
		
		calcSize();
		$(window).resize( function() {calcSize()});

		this.prepend('<div class="carousel-arrowLeft"><span>left</span></div>');
		this.append('<div class="carousel-arrowRight"><span>right</span></div>');
		
		function calcSize(){
			/*calculate*/
			var width = carousel.width();
			var frameArea = Math.ceil(width -(width*(options.marginFrame/100)));
			var sumMarginSlides = options.slidePerFrame * (options.marginSlide*2);
			var usefulArea = frameArea - sumMarginSlides;
			var slideWidth = Math.floor(usefulArea / options.slidePerFrame);
			var slideCount = list.find('li').length;
			/*reset*/
			list.closest('div').width(frameArea);
			list.find('li').width(slideWidth);
			pixelsOffset = slideWidth + (options.marginSlide*2);
			minimumOffset = -((slideCount - options.slidePerFrame) * pixelsOffset);
			currentLeftValue = 0;
			list.css({left:0})
		}

		this.find('.carousel-arrowLeft').click(function () {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				list.animate({ left: currentLeftValue + 'px' }, 200);
			}
		});

		this.find('.carousel-arrowRight').click(function () {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;
				list.animate({ left: currentLeftValue + 'px' }, 200);
			}
		});
		return this
	}
})(jQuery);