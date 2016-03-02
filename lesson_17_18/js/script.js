(function ($) {
	$.fn.tabControl = function (tab, page, activeClass) {
		var root = $(this);
		var item = root.children(tab).children('li');
		var content = root.children(page);

		item.on("click", function () {
			item.removeClass(activeClass);
			$(this).addClass(activeClass);
			content.hide();
			content.eq($(this).index()).show();
		});
	};
})(jQuery);

$(function () {
	$('.pages').tabControl('.tab', '.page', 'active');
	$('.tooltip').on('mouseover', function (e) { $(this).toggleClass('titleForm'); });
	$('.tooltip').on('mouseout', function (e) { $(this).removeClass('titleForm')});
});
