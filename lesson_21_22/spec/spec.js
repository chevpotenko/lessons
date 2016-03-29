var test = require('../src/tests/test.js');

describe('app', function () {
	var demoArr = [false, true, true];

	it('conclusion()', function() {

		var conclusion = test.conclusion(demoArr);
		expect(conclusion).toEqual('Результат: 2 / 3');

	});

	it('createMessage()', function() {

		var message = test.createMessage(demoArr);
		expect(message).toEqual('<p>1 вопрос - <span>false</span></p><p>2 вопрос - <b>true</b></p><p>3 вопрос - <b>true</b></p><p class="conclusion">Результат: 2 / 3</p>');

	});
});
