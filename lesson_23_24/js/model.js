define(
	'model',
	[],
	
	function(){
		
		return function Model(data){
			self = this;
			self.data = data;
			
			self.addItem = function(item){
				if (item.length>0){
					self.data.push(item)
				}
			}
			
			self.removeItem = function(item){
				var index =self.data.indexOf(item);
				if(index === -1){return};
				self.data.splice(index, 1);
			}
			
			self.editItem = function(index, item){
				self.data[index] = item;
			}
		}
	}
);