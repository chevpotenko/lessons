'use strict';

$(function () {

	function createTest(quiz) {
		var templateHtml = $('#template').html();
		var content = tmpl(templateHtml, { data: quiz });
		$('.surveyList').append(content);
	}

	createTest(quiz);

	var newQuiz = new App({
		name: 'box',
		overlay: 'overlay',
		modal: 'modal'
	});
});
