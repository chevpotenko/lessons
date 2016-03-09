requirejs.config({
	paths:{
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
		'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
		'template':'template',
		'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.1/backbone-min'
	},
	shim:{
		'jquery':{
			exports: 'jquery'
		},
		'underscore':{
			exports: 'underscore'
		},
		'template':{
			exports:'template'
		},
		'backbone':{
			exports: 'backbone'
		}
	}
})

requirejs(
	[
	'jquery',
	'underscore',
	'template',
	'backbone',
	'u_models',
	'u_collections',
	'u_views'
	],

	function($, _, template, backbone, u_models, u_collections, u_views){

		$(function(){

			window.App = {
				Models : {},
				Collections : {},
				Views : {}
			};

			var idItem;

			u_models();
			u_collections();
			u_views();

			var data = [{title: 'HTML'}, {title: 'CSS'}, {title:'JS'}];
			var collection = new App.Collections.Task(data);
			var views = new App.Views.Tasks({collection:collection});
			var addTask = new App.Views.EditTask({collection:collection})
			$('.listBox').append(views.render().el);
		})
	}
)
