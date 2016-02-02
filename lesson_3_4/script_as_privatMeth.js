'use strict';
(function () {
  var Quize = {

    createQuize: function (options) {
      if (!options) options = {};
      var numQ = options.numberQ || 3;
      var numAnswerInQ = options.numberA || 3;
      var nameQuize = options.nameQ || 'Тест по программированию';
      var textQ = options.textQ || 'Вариант ответа №';
      var textAnswer = options.textA || 'Вопрос №';

      var box = this._createEl('div', { class: 'box' });
      var form = this._createEl('form', { action: '#', method: 'get', name: 'form1' });
      var ol = this._createEl('ol');

      this._appendEl(box, this._createEl('h1'), nameQuize);
      this._appendEl(box, form);
      this._appendEl(form, ol);

      var k = 0;
      var ul, mainLi, li;
      for (var i = 0; i < numQ; ++i) {
        mainLi = this._createEl('li');
        this._appendEl(ol, mainLi, textAnswer + (i + 1));
        ul = this._createEl('ul');
        for (var j = 0; j < numAnswerInQ; ++j) {
          li = this._createEl('li');
          this._appendEl(li, this._createEl('input', { type: 'checkbox', name: ('item' + k), value: ('i' + k), id: ('item' + k) }));
          this._appendEl(li, this._createEl('label', { for: ('item' + k) }), textQ + (j + 1));
          this._appendEl(ul, li);
          k++;
        };
        this._appendEl(mainLi, ul);
      };
      this._appendEl(form, this._createEl('input', { type: 'submit', name: 'submit', value: 'Проверить мои результаты' }));
      this._appendEl(document.getElementsByTagName('body')[0], box);
    },

    _createEl: function (Name, attr) {
      var El = document.createElement(Name);
      if (attr) { for (var key in attr) { El.setAttribute(key, attr[key]); }; };
      return El;
    },

    _appendEl: function (parentEl, childEl, content) {
      if (content) childEl.innerHTML = content;
      parentEl.appendChild(childEl);
    }

  };
  Quize.createQuize({ numberQ: 2, numberA: 3, nameQ: 'Title' });
})();