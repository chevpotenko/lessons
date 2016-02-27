define(
	'view',
	[],
	
	function(){
		
		return function View(model){
			var self = this;
			
			function init(){
				var wrapper = tmpl($('#wrapper').html());
				$('body').append(wrapper);
				
				self.elements = {
					textItem: $('.textItem'),
					btn: $('.btn'),
					list: $('.list'),
					items: $('#items')
					
				}
				self.renderList(model.data);
			}
			
			self.renderList = function (data){
				var tmplList = tmpl(self.elements.items.html(), {data:data});
				self.elements.list.html(tmplList);
				self.elements.textItem.val('');
			}
			
			self.beginEdit = function (contentItem){
				self.elements.btn.text('edit').addClass('btn--edit');
				self.elements.textItem.val(contentItem);
			}
			
			self.endEdit = function (){
				self.elements.btn.text('add').removeClass('btn--edit');
				self.elements.textItem.val('');
			}
			
			init();
		}
	}
);