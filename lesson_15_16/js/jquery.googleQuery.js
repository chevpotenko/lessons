(function ($) {

	$.fn.googleQuery = function (options) {
		var textQuery;
		var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
		var root = $(this);

		function newQuery(e) {
			e.preventDefault();
			textQuery = root.find('[type=text]').val();
			sendQuery();
			if ($(root.find('.' + options.boxResult).hasClass(options.classHide))) {
				root.find('.' + options.boxForm).addClass(options.classReplace);
				root.find('.' + options.boxMenu).removeClass(options.classHide);
				root.find('.' + options.boxResult).removeClass(options.classHide)
				root.find('[type=submit]').val('');
			}
		}

		function sendQuery() {
			$.ajax({
				url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0'
				+ '&key=' + key
				+ '&q=' + textQuery
				+ '&rsz=8&callback=GoogleCallback&context=?',
				dataType: 'jsonp',
				success: doAnswer
			})
		}

		function doAnswer(data) {
			var html = root.find('#' + options.boxTemplate).html();
			var content = tmpl(html, { data: data.results });
			root.find('.' + options.boxResult + ' ul').html(content);
			if (options.idAmountResults) { root.find('#' + options.idAmountResults).html(data.results.length) };
			if (options.idTextQuery) { root.find('#' + options.idTextQuery).html(textQuery) };
		};

		root.find('form').on('focusin', function () { $(this).addClass(options.classInput) })
		.on('focusout', function () { $(this).removeClass(options.classInput) });
		root.find('[type=submit]').on('click', newQuery);
	}

})(jQuery)

function GoogleCallback(func, data) {
	window[func](data);
};