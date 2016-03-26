define(function () {
	function Model(data) {
		this.data = data;

		this.addItem = function (item) {
			if (item.length > 0) {
				this.data.push(item);
			}
		};

		this.removeItem = function (item) {
			var index = this.data.indexOf(item);
			if (index === -1) {return; }
			this.data.splice(index, 1);
		};

		this.editItem = function (index, item) {
			this.data[index] = item;
		};
	}
	return Model;
});
