'use strict';
$(function () {

  /*---------------ОПРОСНИК-----------------------------------------------------------------------*/
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

  /*-------------ШАБЛОН-----------------------------------------------------------------------------*/

  var survey = localStorage.getItem('test');
  survey = JSON.parse(survey);
  var templateHtml = $('#template').html();
  var content = tmpl(templateHtml, { data: survey });
  $('.surveyList').append(content);

  /*---------------ФОРМА----------------------------------------------------------------------------*/

  var listCheckbox = $('input:checkbox');
  var log = [];
  var message = '';


  for (var i = 0; i < survey.length; ++i) { log[i] = false };

  createOverlay();
  createModal();


  listCheckbox.on('click', check);

  $('button').on('click', function (e) {e.preventDefault(); openModal()});

  $('.overlay').on('click', closeModal);

  $('.closeModal').on('click', closeModal);
    
  
  function check() {    
    var userVariant = $(this).closest('li').index() + 1;
    var currentAnswer = $(this).closest('ul').closest(' li');
    var numberAnswer = currentAnswer.index();    
    currentAnswer.find('input').prop('checked', false);
    $(this).prop('checked', true);
    if (survey[numberAnswer - 1].answer == userVariant) { log[numberAnswer - 1] = true } else { log[numberAnswer - 1] = false };
  }
  

  function createResult() {
    message = '';
    for (var i = 0; i < log.length; ++i) {
      if (log[i]) {
        message += '<p>' + (i + 1) + ' вопрос - <b>true</b></p>';
      } else {
        message += '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
      }
    }
    $('.message').html(message);
  };
  

  function clearResult() {
    if ($('.modal input').prop('checked')) {
      message = '';
      for (var i = 0; i < survey.length; ++i) { log[i] = false };
      listCheckbox.prop('checked', false);
    };
  };


  function createOverlay() {
    $('body').append('<div class="overlay"></div>');
  };


  function createModal() {
    var content = '<div class="modal"><div class="closeModal">X</div><div class="message"></div><label><input type="checkbox"/> очистить</label></div>';
    $('body').append(content);
  };


  function openModal() {  
    $('.overlay').show();
    createResult();
    $('.modal').show();
  };


  function closeModal() {
    $('.overlay').hide();
    $('.modal').hide();
    clearResult();
  };


});