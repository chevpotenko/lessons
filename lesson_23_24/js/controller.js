define(
	'controller',
	[],
	
	function(){
		
		return function Controller(model, view){
			var self = this;
			var index;
			
			function action(){
				var contentItem = view.elements.textItem.val();
				if (view.elements.btn.text()=='add'){
					model.addItem(contentItem);
					view.renderList(model.data);
				}
				if (view.elements.btn.text()=='edit'){
					if (!contentItem){ 
						view.endEdit();
						return
					};
					model.editItem(index, contentItem);
					view.endEdit();
					view.renderList(model.data);
				}
			}
			
			function deleteItem(e){
				e.stopPropagation();
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data)
			}
			
			function editItem(){
				index = $(this).index();
				contentItem =$(this).text().slice(0,-2);
				view.beginEdit(contentItem);
			}
			
			view.elements.btn.on('click', action);
			view.elements.list.on('click', '.btnDelete', deleteItem);
			view.elements.list.on('click', '.item', editItem);
		}
	}
);