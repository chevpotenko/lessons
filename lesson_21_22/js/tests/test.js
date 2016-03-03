var test = {

	conclusion : function(result) {
		var correct = 0;
		result.forEach(function (value, result) {
			if (value) {++correct}
		})
		return correct = 'Результат: ' + correct + ' / ' +result.length;
	},

	createMessage : function (result) {

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
		return message += '<p class="conclusion">' + test.conclusion(result) + '</p>';
	}

}


try{
	module.exports = test;
}catch(e){}

