'use strict';
$(function () {
	/*---------------Quiz---------------------------------------------------------------------------*/
	
	var surveyStorage = [
		{
			 question: 'Для чего предназначена функция shift()',
			 variant1: 'сдвигает элементы к началу массива',
			 variant2: 'возвращает фрагмент массива',
			 variant3: 'удаляет и возвращает последний элемент массива',
			 answer: 1
		},
		 {
			 question: 'Для чего предназначена функция slice()',
			 variant1: 'сдвигает элементы к началу массива',
			 variant2: 'возвращает фрагмент массива',
			 variant3: 'удаляет и возвращает последний элемент массива',
			 answer: 2
		},
		{
			 question: 'Для чего предназначена функция pop()',
			 variant1: 'сдвигает элементы к началу массива',
			 variant2: 'возвращает фрагмент массива',
			 variant3: 'удаляет и возвращает последний элемент массива',
			 answer: 3
		}
	];
	localStorage.setItem('test', JSON.stringify(surveyStorage));
	
	/*-------------LocalStorage-----------------------------------------------------------------------*/
	
	var survey = localStorage.getItem('test');
	survey = JSON.parse(survey);
	var templateHtml = $('#template').html();
	var content = tmpl(templateHtml, { data: survey });
	$('.surveyList').append(content);
	
	/*---------------CheckQuiz------------------------------------------------------------------------*/
	var listCheckbox = $('input:checkbox');
	var log = [];
	var message = '';
	for (var i = 0; i < survey.length; ++i) { log[i] = false };

	function checkQuiz() {
		var userVariant = $(this).closest('li').index() + 1;
		var currentAnswer = $(this).closest('ul').closest(' li');
		var numberAnswer = currentAnswer.index();
		currentAnswer.find('input').prop('checked', false);
		$(this).prop('checked', true);
		(survey[numberAnswer - 1].answer == userVariant) ? log[numberAnswer - 1] = true : log[numberAnswer - 1] = false;
	}
	function createResult() {
		message = '';
		for (var i = 0; i < log.length; ++i) {
			(log[i]) ? message += '<p>' + (i + 1) + ' вопрос - <b>true</b></p>' : message += '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
			$('.message').html(message);
		}
	}
	function clearResult() {
		if ($('.modal input').prop('checked')) {
			message = '';
			for (var i = 0; i < survey.length; ++i) { log[i] = false };
			listCheckbox.prop('checked', false);
		}
	}
	
	function createOverlay() { 
		$('body').append('<div class="overlay"></div>')
	};

	function createModal() {
		$('body').append('<div class="modal"><div class="closeModal">X</div><div class="message"></div><label><input type="checkbox"/> очистить</label></div>');
	}

	function alignModal(elem) {
		elem.css({
			left: ($(window).width() - elem.outerWidth()) / 2 + 'px',
			top: ($(window).height() - elem.outerHeight()) / 2 + 'px'
		})
	}
	
	createOverlay();
	createModal();
	
	$(window).resize(function(){alignModal($('.modal'))});
	
	listCheckbox.on('click', checkQuiz);
	
	$('button').on('click', function (e) {
		e.preventDefault();
		createResult();
		alignModal($('.modal'))
		$('.overlay, .modal').fadeIn(200);
	});
	
	$('.overlay, .closeModal').on('click', function(){
		$('.overlay, .modal').fadeOut(200);
		clearResult();
	});
	
});
