$(function () {

	function Model(data){
		var self = this;
		self.log = [];
		
		self.clearLog = function(){
			for (var i = 0; i < data.length; ++i) { self.log[i] = false };
		}
		
		self.writeLog = function(index, userVariant){
			(data[index].answer == userVariant) ? self.log[index] = true : self.log[index] = false;
		}
		self.clearLog();
	}
	
	
	
	function View(model){
		var self = this;
		
		function createOverlay() { 
			$('body').append('<div class="overlay"></div>')
		}
		
		function createModal() {
			$('body').append('<div class="modal"><div class="closeModal">X</div><div class="message"></div><label><input type="checkbox"/> очистить</label></div>');
		}
		
		self.createResult = function () {
			var messageText = '';
			for (var i = 0; i < model.log.length; ++i) {
				(model.log[i]) ? messageText += '<p>' + (i + 1) + ' вопрос - <b>true</b></p>' : messageText += '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
				self.elements.message.html(messageText);
			}
		}
		
		self.clearCheckBox = function(){
			self.elements.listCheckbox.prop('checked', false)
		}
		
		self.setCheckBox = function(currentQuestion, curentItem){
			currentQuestion.find('input').prop('checked', false);
			curentItem.prop('checked', true);			
		}
		
		self.alignModal = function (elem) {
			elem.css({
				left: ($(window).width() - elem.outerWidth()) / 2 + 'px',
				top: ($(window).height() - elem.outerHeight()) / 2 + 'px'
			});
		}
		
		createOverlay();
		createModal();
		
		self.elements = {
			modal: $('.modal'),
			closeModal: $('.modal .closeModal'),
			modalInput: $('.modal input'),
			message: $('.modal .message'),
			overlay: $('.overlay'),
			listCheckbox: $('.surveyList input:checkbox'),
			button: $('.box button')
		}
	}
		
	
	
	function Controller (model, view){
		
		$(window).resize(function(){ view.alignModal(view.elements.modal) });
		
		view.elements.listCheckbox.on('click', function () {
			var curentItem = $(this)
			var userVariant = curentItem.closest('li').index() + 1;
			var currentQuestion = curentItem.closest('ul').closest(' li');
			var numberQuestion = currentQuestion.index() - 1;
			view.setCheckBox(currentQuestion, curentItem);
			model.writeLog(numberQuestion, userVariant);
		});
		
		view.elements.button.on('click', function (e) {
			e.preventDefault();
			view.createResult();
			view.alignModal(view.elements.modal)
			view.elements.overlay.add(view.elements.modal).fadeIn(200);
		});
		
		view.elements.overlay.add(view.elements.closeModal).on('click', function(){
			view.elements.overlay.add(view.elements.modal).fadeOut(200);
			if (view.elements.modalInput.prop('checked')) {
				model.clearLog();
				view.clearCheckBox();
			}
		});
	}
	
	
	var data = survey
	var quizModel = new Model(data);
	var quizView = new View(quizModel);
	var quizController = new Controller (quizModel, quizView);
})

