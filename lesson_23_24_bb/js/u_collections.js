define(
	'u_collections',
	[],

	function(){
		return function u_collections(){

			App.Collections.Task = Backbone.Collection.extend({
				model: App.Models.Task
			});

		};
	}
);
