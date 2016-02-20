function App(name){
	/*-------------------init-------------------------------------------*/
	
	let test=document.querySelector(('.'+name));
	let listCheckbox = test.querySelectorAll('input');
	let log = [];
	let overlay;
	let modal;
	let message = '';	
	for (let i = 0; i < quiz.length; ++i) { log[i] = false };
	
	/*-------------------private methods--------------------------------*/
	
	function checkTest() {
		let userVariant = [].indexOf.call(this.parentNode.parentNode.children, this.parentNode)+1;
		let numberAnswer = [].indexOf.call(this.parentNode.parentNode.parentNode.parentNode.children, this.parentNode.parentNode.parentNode);
		let inputs = this.parentNode.parentNode.querySelectorAll('input');
		for(let i = 0; i < inputs.length; ++i){
			inputs[i].checked = false
		};
		this.checked=true;
		(quiz[numberAnswer - 1].answer == userVariant) ? log[numberAnswer - 1] = true : log[numberAnswer - 1] = false;
	}
	
	function createResult() {
		message = '';
		let i=0;
		for (let value of log ) {
			(value) ? message += '<p>' + (i + 1) + ' вопрос - <b>true</b></p>' : message += '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
		}
		modal.querySelector('.message').innerHTML=message;
	}
	
	function clearResult() {
		if ( modal.querySelector('input').checked) {
			message = '';
			for ( let i = 0; i < quiz.length; ++i) { log[i] = false };
			for ( let i = 0; i < listCheckbox.length; ++i){
				listCheckbox[i].checked = false;
			}
		}
	}
	
	function createModal(){
		let modal = document.createElement('div');
		modal.setAttribute('class','modal');
		modal.innerHTML='<div class="iconModal">X</div><div class="message"></div><label><input type="checkbox"/> очистить</label>'
		document.querySelector('body').appendChild(modal);
		return modal;
	}
	
	/*-------------------public methods--------------------------------*/
	
	this.createOverlay = function(){
		let overlay = document.createElement('div');
		overlay.setAttribute('class','overlay');
		document.querySelector('body').appendChild(overlay);
		return overlay;
	}
	
	/*-------------------events-----------------------------------------*/
	
	overlay = this.createOverlay();
	modal = createModal();
	
	for(let i = 0; i<listCheckbox.length; ++i){
		listCheckbox[i].addEventListener('click', checkTest);
	}
	
	test.querySelector('button').addEventListener('click', function (e) {
		e.preventDefault();
		createResult();
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
	});
	
	modal.querySelector('.iconModal').addEventListener('click', function (){
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		clearResult()
	});
	
	overlay.addEventListener('click', function (){
		this.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		clearResult()
	});

}