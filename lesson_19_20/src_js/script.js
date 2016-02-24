$(function () {
	/*Carousel------------------------------------------------------------------------------*/

	$('.mainTheme')
		.on('jcarousel:create jcarousel:reload', init)
		.jcarousel({ wrap: 'both' })
		.jcarouselAutoscroll({
			interval: 2000,
			target: '+=1',
			autostart: true
		});

	function init() {
		var element = $(this);
		var width = element.innerWidth();
		if (width > 475) { width = width / 1; };
		element.jcarousel('items').css('width', width + 'px');
	}
 
	$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function () { $(this).addClass('activeTheme'); })
		.on('jcarouselpagination:inactive', 'a', function () { $(this).removeClass('activeTheme'); })
		.jcarouselPagination({ item: function (page) { return '<a href="#"></a>'; } })
		.on('click', function (e) { e.preventDefault() });

	/*accordion------------------------------------------------------------------------------*/
	
	$(".banner").accordion(
		{
			icons:false,
			heightStyle: "content",
			beforeActivate: function (click,ui) {
				var active = ui.newHeader.index('.banner-header');
				$('.banner-header')
				.removeClass('banner--activeHeader');
				$('.banner-header')
				.eq(active)
				.addClass('banner--activeHeader');
			} 
		}
	 );
})