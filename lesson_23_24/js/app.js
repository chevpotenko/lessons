requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery',
		'template': 'lib/template'
	},
	shim: {
		'jquery': {
			exports: 'jquery'
		},
		'template': {
			exports: 'template'
		}
	}
});

require(['jquery', 'model', 'view', 'controller'], function($, Model, View, Controller) {
	$(function() {
		var data = ['git', 'node.js', 'MVC'];
		var modelToDo = new Model(data);
		var viewToDo = new View(modelToDo);
		var controllerToDo = new Controller(modelToDo, viewToDo);
	});
});
