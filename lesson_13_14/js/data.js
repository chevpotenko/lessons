'use strict';

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
