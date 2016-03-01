$(function () {

	function Model(data) {

		this.result = [];

		this.resetResult = function () {
			for (var i = 0; i < data.length; ++i) {
				this.result[i] = false
			};
		}

		this.setResult = function(index, userVariant){
			this.result[index] = (data[index].answer == userVariant);
		}
		this.resetResult();
	}


	function View(model){

		this.elements = {
			modal: $('.modal'),
			closeModal: $('.modal .closeModal'),
			modalInput: $('.modal input'),
			message: $('.modal .message'),
			overlay: $('.overlay'),
			listCheckbox: $('.surveyList input:checkbox'),
			button: $('.box button')
		}

		this.showResult = function () {
			var messageText = '';
			for (var i = 0; i < model.result.length; ++i) {
				messageText += (model.result[i])
				? '<p>' + (i + 1) + ' вопрос - <b>true</b></p>'
				: '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
				this.elements.message.html(messageText);
			}
		}

		this.clearCheckBox = function() {
			this.elements.listCheckbox.prop('checked', false)
		}

		this.setCheckBox = function(currentQuestion, curentItem){
			currentQuestion.find('input').prop('checked', false);
			curentItem.prop('checked', true);
		}

		this.alignModal = function (elem) {
			elem.css({
				left: ($(window).width() - elem.outerWidth()) / 2 + 'px',
				top: ($(window).height() - elem.outerHeight()) / 2 + 'px'
			});
		}

	}


	function Controller (model, view) {

		$(window).resize(function(){ view.alignModal(view.elements.modal) });

		view.elements.listCheckbox.on('click', function () {
			var curentItem = $(this)
			var userVariant = curentItem.closest('li').index() + 1;
			var currentQuestion = curentItem.parents('.question');
			var numberQuestion = currentQuestion.index();
			view.setCheckBox(currentQuestion, curentItem);
			model.setResult(numberQuestion, userVariant);
		});

		view.elements.button.on('click', function (e) {
			view.showResult();
			view.alignModal(view.elements.modal)
			view.elements.overlay.add(view.elements.modal).fadeIn(200);
			return false;
		});

		view.elements.overlay.add(view.elements.closeModal).on('click', function(){
			view.elements.overlay.add(view.elements.modal).fadeOut(200);
			if (view.elements.modalInput.prop('checked')) {
				model.resetResult();
				view.clearCheckBox();
			}
		});
	};

	var quizModel = new Model(survey);
	var quizView = new View(quizModel);
	var quizController = new Controller (quizModel, quizView);
})
