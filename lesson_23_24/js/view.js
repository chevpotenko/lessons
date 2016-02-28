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
					item: $('.changeItem'),
					btn: $('.btn'),
					list: $('.list'),
					items: $('#items')
				}
				self.renderList(model.data);
			}
			
			self.renderList = function (data){
				var tmplList = tmpl(self.elements.items.html(), {data:data});
				self.elements.list.html(tmplList);
				self.elements.item.val('');
			}
			
			self.beginEdit = function (item){
				self.elements.btn.text('edit').addClass('btn--edit');
				self.elements.item.val(item);
			}
			
			self.stopEdit =function (){
				self.elements.btn.text('add').removeClass('btn--edit');
				self.elements.item.val('');
			}
			
			init();
		}
	}
);