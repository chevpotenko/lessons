'use strict';

function App(name) {
	/*-------------------init-------------------------------------------*/

	var test = document.querySelector('.' + name);
	var listCheckbox = test.querySelectorAll('input');
	var log = [];
	var overlay = undefined;
	var modal = undefined;
	var message = '';
	for (var i = 0; i < quiz.length; ++i) {
		log[i] = false;
	};

	/*-------------------private methods--------------------------------*/

	function checkTest() {
		var userVariant = [].indexOf.call(this.parentNode.parentNode.children, this.parentNode) + 1;
		var numberAnswer = [].indexOf.call(this.parentNode.parentNode.parentNode.parentNode.children, this.parentNode.parentNode.parentNode);
		var inputs = this.parentNode.parentNode.querySelectorAll('input');
		for (var i = 0; i < inputs.length; ++i) {
			inputs[i].checked = false;
		};
		this.checked = true;
		quiz[numberAnswer - 1].answer == userVariant ? log[numberAnswer - 1] = true : log[numberAnswer - 1] = false;
	}

	function createResult() {
		message = '';
		var i = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = log[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				value ? message += '<p>' + (i + 1) + ' вопрос - <b>true</b></p>' : message += '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
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

		modal.querySelector('.message').innerHTML = message;
	}

	function clearResult() {
		if (modal.querySelector('input').checked) {
			message = '';
			for (var i = 0; i < quiz.length; ++i) {
				log[i] = false;
			};
			for (var i = 0; i < listCheckbox.length; ++i) {
				listCheckbox[i].checked = false;
			}
		}
	}

	function createModal() {
		var modal = document.createElement('div');
		modal.setAttribute('class', 'modal');
		modal.innerHTML = '<div class="iconModal">X</div><div class="message"></div><label><input type="checkbox"/> очистить</label>';
		document.querySelector('body').appendChild(modal);
		return modal;
	}

	/*-------------------public methods--------------------------------*/

	this.createOverlay = function () {
		var overlay = document.createElement('div');
		overlay.setAttribute('class', 'overlay');
		document.querySelector('body').appendChild(overlay);
		return overlay;
	};

	/*-------------------events-----------------------------------------*/

	overlay = this.createOverlay();
	modal = createModal();

	for (var i = 0; i < listCheckbox.length; ++i) {
		listCheckbox[i].addEventListener('click', checkTest);
	}

	test.querySelector('button').addEventListener('click', function (e) {
		e.preventDefault();
		createResult();
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
	});

	modal.querySelector('.iconModal').addEventListener('click', function () {
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		clearResult();
	});

	overlay.addEventListener('click', function () {
		this.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		clearResult();
	});
}
