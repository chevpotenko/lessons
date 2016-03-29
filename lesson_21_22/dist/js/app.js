'use strict';

function App(options) {

	var test = document.querySelector('.' + options.name);
	var overlay = document.querySelector('.' + options.overlay);
	var modal = document.querySelector('.' + options.modal);
	var listCheckbox = test.querySelectorAll('input');
	var result = [];

	/*-------------------result-----------------------------------------*/

	function calcResult() {
		for (var i = 0; i < quiz.length; ++i) {
			result[i] = false;
		}
		var index = 0;
		for (var _i = 0; _i < quiz.length; ++_i) {
			var amountletiant = Object.keys(quiz[_i]).length - 2;
			for (var j = 0; j < amountletiant; ++j) {
				if (listCheckbox[index].checked) {
					if (j + 1 == quiz[_i].answer) {
						result[_i] = true;
					}
				}
				++index;
			}
		}
	}

	function conclusion(result) {
		var correct = 0;
		result.forEach(function (value, result) {
			if (value) {
				++correct;
			}
		});
		return correct = 'Результат: ' + correct + ' / ' + result.length;
	}

	function createMessage(result) {
		var message = '';
		var i = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				message += value ? '<p>' + (i + 1) + ' вопрос - <b>true</b></p>' : '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
				++i;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return message += '<p class="conclusion">' + conclusion(result) + '</p>';
	}

	/*-------------------represent--------------------------------------*/

	function showMessage() {
		modal.querySelector('.message').innerHTML = createMessage(result);
	}

	function resetAnswer() {
		var inputs = this.parentNode.parentNode.querySelectorAll('input');
		for (var i = 0; i < inputs.length; ++i) {
			inputs[i].checked = false;
		}
		this.checked = true;
	}

	function resetQuiz() {
		if (modal.querySelector('input').checked) {
			for (var i = 0; i < listCheckbox.length; ++i) {
				listCheckbox[i].checked = false;
			}
		}
	}

	/*-------------------events-----------------------------------------*/

	for (var i = 0; i < listCheckbox.length; ++i) {
		listCheckbox[i].addEventListener('click', resetAnswer);
	}

	test.querySelector('button').addEventListener('click', function (e) {
		e.preventDefault();
		calcResult();
		showMessage();
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
	});

	modal.querySelector('.iconModal').addEventListener('click', function () {
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		resetQuiz();
	});

	overlay.addEventListener('click', function () {
		this.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		resetQuiz();
	});
}
