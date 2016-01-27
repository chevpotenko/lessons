/*LESSON 3-4 ---------------------------------------------------------------*/
var test = {};

test.box = function () {
  var root = document.getElementsByTagName('body')[0];
  var mainBox = document.createElement('div');
  mainBox.className = 'box'
  root.appendChild(mainBox);
}

test.caption = function () {
  var mainBox = document.querySelector('.box');
  var header = document.createElement('h1');
  header.innerHTML = 'Тест по программированию';
  mainBox.appendChild(header);
}

test.formCreate = function () {

  //create tag form
  var mainBox = document.querySelector('.box');
  var formBox = document.createElement('form');
  formBox.setAttribute('action', '#');
  formBox.setAttribute('method', 'get');
  formBox.setAttribute('name', 'form1');
  mainBox.appendChild(formBox);

  //create categories using tag ol
  var olTag = document.createElement('ol');
  formBox.appendChild(olTag);
  for (var i = 1; i < 4; ++i) {
    var liTag = document.createElement('li');
    liTag.innerHTML = 'Вопрос №' + i;
    olTag.appendChild(liTag);

    // create ul with checkbox
    var ulTag = document.createElement('ul');
    for (var j = 1; j < 4; ++j) {
      ulTag.innerHTML += '<li><input type="checkbox"/><label>Вариант ответа №' + j + '</label></li>';
    }
    liTag.appendChild(ulTag);
  }
  // create button Submit
  var submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('value', 'Проверить мои результаты');
  formBox.appendChild(submitBtn);
};

test.style = function () {
  var tagHead = document.getElementsByTagName('head');
  var tagLink = document.createElement('link');
  tagLink.setAttribute('href', 'test.css');
  tagLink.setAttribute('type', 'text/сss');
  tagLink.setAttribute('rel', 'stylesheet');
  tagHead[0].appendChild(tagLink);
}

test.setParamCheckbox = function () {
  var checkBox = form1.getElementsByTagName('input');
  for (i = 0; i < checkBox.length; ++i) {
    if (checkBox[i].getAttribute('type') == 'checkbox') {
      checkBox[i].setAttribute('name', 'item' + (i + 1));
      checkBox[i].setAttribute('value', 'i' + (i + 1));
      checkBox[i].setAttribute('id', 'item' + (i + 1))
    };
  };
};
test.setParamLabel = function () {
  var label = form1.getElementsByTagName('label');
  for (i = 0; i < label.length; ++i) {
    label[i].setAttribute('for', 'item' + (i + 1));
  };
};

test.box();
test.caption();
test.formCreate();
test.setParamCheckbox();
test.setParamLabel();
test.style();
