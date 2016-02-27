requirejs.config({
	paths:{
		'jQuery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery',
		'template':'template'
	},
	shim:{
		'jQuery':{
			exports: 'jQuery'
		},
		'template':{
			exports:'template'
		}
	}
})

require(
	[
	'jQuery',
	'template',
	'model',
	'view',
	'controller'
	],
	
	function($, template, Model, View, Controller){
		$(function(){
			var data = ['git', 'node.js', 'MVC'];
			var modelToDo = new Model(data);
			var viewToDo = new View(modelToDo);
			var controllerToDo = new Controller(modelToDo, viewToDo);
		})
	}
)