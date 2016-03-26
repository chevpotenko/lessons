define(['jquery', 'template'], function($, template) {
	function View(model) {
		this.init = function () {
			var wrapper = tmpl($('#wrapper').html());
			$('body').append(wrapper);
			this.elements = {
				item: $('.changeItem'),
				btn: $('.btn'),
				list: $('.list'),
				items: $('#items')
			};
			this.renderList(model.data);
		};

		this.renderList = function (data) {
			var tmplList = tmpl(this.elements.items.html(), {data: data});
			this.elements.list.html(tmplList);
			this.elements.item.val('');
		};

		this.beginEdit = function (item) {
			this.elements.btn.text('edit').addClass('btn--edit');
			this.elements.item.val(item);
		};

		this.stopEdit = function () {
			this.elements.btn.text('add').removeClass('btn--edit');
			this.elements.item.val('');
		};

		this.init();
	}
	return View;
});
