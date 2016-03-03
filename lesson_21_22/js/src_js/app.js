function App(options) {

	let test = document.querySelector(('.'+options.name));
	let overlay = document.querySelector(('.'+options.overlay));
	let modal = document.querySelector(('.'+options.modal));
	let listCheckbox = test.querySelectorAll('input');
	let result = [];

	/*-------------------result-----------------------------------------*/

	function calcResult (){
		for( let i = 0; i < quiz.length;++i){result[i]=false};
		let index = 0;
		for( let i=0; i < quiz.length; ++i){
			let amountletiant = Object.keys(quiz[i]).length-2;
			for( let j=0; j < amountletiant; ++j){
				if(listCheckbox[index].checked){
					if (j+1 == quiz[i].answer){
						result[i] = true
					};
				};
				++index;
			}
		}
	}

	function conclusion (result){
		let correct = 0;
		result.forEach(function(value, result){
			if (value) {++correct}
		})
		return correct= 'Результат: ' + correct + ' / ' +result.length;
	}

	function createMessage (result) {
		let message = '';
		let i=0;
		for (let value of result ) {
			message += (value)
			? '<p>' + (i + 1) + ' вопрос - <b>true</b></p>'
			: '<p>' + (i + 1) + ' вопрос - <span>false</span></p>';
			++i;
		}
		return message += '<p class="conclusion">' + conclusion(result) + '</p>';
	}

	/*-------------------represent--------------------------------------*/

	function showMessage(){
		modal.querySelector('.message').innerHTML = createMessage(result);
	}

	function resetAnswer() {
		let inputs = this.parentNode.parentNode.querySelectorAll('input');
		for(let i = 0; i < inputs.length; ++i){
			inputs[i].checked = false
		};
		this.checked=true;
	}

	function resetQuiz() {
		if ( modal.querySelector('input').checked) {
			for ( let i = 0; i < listCheckbox.length; ++i){
				listCheckbox[i].checked = false;
			}
		}
	}

	/*-------------------events-----------------------------------------*/

	for(let i = 0; i<listCheckbox.length; ++i){
		listCheckbox[i].addEventListener('click', resetAnswer);
	}

	test.querySelector('button').addEventListener('click', function (e) {
		e.preventDefault();
		calcResult();
		showMessage();
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
	});

	modal.querySelector('.iconModal').addEventListener('click', function (){
		overlay.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		resetQuiz()
	});

	overlay.addEventListener('click', function (){
		this.classList.toggle('showHide');
		modal.classList.toggle('showHide');
		resetQuiz()
	});
}
