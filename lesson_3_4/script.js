'use strict';
(function () {
  function createQuize(numQ, numAnswerInQ, options) {
    if (!options) options = {};
    var numQ = options.nQ || 3;
    var numAnswerInQ = options.nA || 3;
    var nameQuize = options.nameQ || 'Тест по программированию';
    var textQ = options.tQ || 'Вариант ответа №';
    var textAnswer = options.tA || 'Вопрос №';

    var box = createEl('div', { class: 'box' });
    appendEl(box, createEl('h1'), nameQuize);
    var form = createEl('form', { action: '#', method: 'get', name: 'form1' });
    appendEl(box, form);
    var ol = createEl('ol');
    appendEl(form, ol);

    var k = 0;
    var ul, mainLi, li;
    for (var i = 0; i < numQ; ++i) {
      mainLi = createEl('li');
      appendEl(ol, mainLi, textAnswer + (i + 1));
      ul = createEl('ul');
      for (var j = 0; j < numAnswerInQ; ++j) {
        li = createEl('li');
        appendEl(li, createEl('input', { type: 'checkbox', name: ('item' + k), value: ('i' + k), id: ('item' + k) }));
        appendEl(li, createEl('label', { for: ('item' + k) }), textQ + (j + 1));
        appendEl(ul, li);
        k++;
      };
      appendEl(mainLi, ul);
    };

    appendEl(form, createEl('input', { type: 'submit', name: 'submit', value: 'Проверить мои результаты' }));
    appendEl(document.getElementsByTagName('body')[0], box);

    function createEl(Name, attr) {
      var El = document.createElement(Name);
      if (attr) { for (var key in attr) { El.setAttribute(key, attr[key]); }; };
      return El;
    };
    function appendEl(parentEl, childEl, content) {
      if (content) childEl.innerHTML = content;
      parentEl.appendChild(childEl);
    }
  };
  createQuize(5, 2, {nQ:2,nA:5});
})();