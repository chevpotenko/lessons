define(['jquery'], function ($) {
	function Controller(model, view) {
		var index;
		function action() {
			var item = view.elements.item.val();
			if (view.elements.btn.text() == 'add') {
				model.addItem(item);
			}
			else {
				if (!item) {
					view.stopEdit();
					return;
				}
				model.editItem(index, item);
				view.stopEdit();
			}
			view.renderList(model.data);
		}

		function deleteItem(e) {
			e.stopPropagation();
			var item = $(this).attr('data-value');
			model.removeItem(item);
			index = 0;
			view.stopEdit();
			view.renderList(model.data);
		}

		function editItem() {
			index = $(this).index();
			var item = $(this).text().slice(0, -2);
			view.beginEdit(item);
		}

		view.elements.btn.on('click', action);
		view.elements.list.on('click', '.btnDelete', deleteItem);
		view.elements.list.on('click', '.item', editItem);
	}
	return Controller;
});
