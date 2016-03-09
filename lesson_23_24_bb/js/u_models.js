define(
	'u_models',
	[],

	function(){
		return function u_models(){

			App.Models.Task = Backbone.Model.extend({
				validate: function(attrs){
					if (!$.trim(attrs.title)){
						return 'Empty value'
					}
				}
			})
		}
	}
);
