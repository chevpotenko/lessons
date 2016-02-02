'use strict';
(function () {
  function Quize(options) {
    if (!options) options = {};
    var formName = options.formN;
    var numQ = options.numberQ || 3;
    var numAnswerInQ = options.numberA || 3;
    var nameQuize = options.nameQ || 'Тест по программированию';
    var textQ = options.textQ || 'Вариант ответа №';
    var textAnswer = options.textA || 'Вопрос №';

    this.createQuize = function () {
      var index = 0;
      var ul, mainLi, li;
      var box = createEl('div', { class: 'box' });
      var form = createEl('form', { action: '#', method: 'get', name: formName });
      var ol = createEl('ol');
      appendEl(box, createEl('h1'), nameQuize);
      appendEl(box, form);
      appendEl(form, ol);      
      for (var i = 0; i < numQ; ++i) {
        mainLi = createEl('li');
        appendEl(ol, mainLi, textAnswer + (i + 1));
        ul = createEl('ul');
        for (var j = 0; j < numAnswerInQ; ++j) {
          li = createEl('li');
          appendEl(li, createEl('input', { type: 'checkbox', name: ('item' + index), value: ('i' + index), id: (formName + index) }));
          appendEl(li, createEl('label', { for: (formName + index) }), textQ + (j + 1));
          appendEl(ul, li);
          index++;
        }
        appendEl(mainLi, ul);
      }
      appendEl(form, createEl('input', { type: 'submit', name: 'submit', value: 'Проверить мои результаты' }));
      appendEl(document.getElementsByTagName('body')[0], box);
    }
    function createEl(Name, attr) {
      var el = document.createElement(Name);
      if (attr) { for (var key in attr) { el.setAttribute(key, attr[key]); }; };
      return el;
    }
    function appendEl(parentEl, childEl, content) {
      if (content) childEl.innerHTML = content;
      parentEl.appendChild(childEl);
    }
  }
  var test1 = new Quize({ formN: 'testHtml', numberQ: 2, numberA: 1, nameQ: 'Test HTML' });
  test1.createQuize();
  var test2 = new Quize({ formN: 'testJs', numberQ: 2, numberA: 2, nameQ: 'Test JS' });
  test2.createQuize();
})();