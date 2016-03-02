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
