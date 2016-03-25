(function(){
	function task1(array){
		var skills=_.map(array, 'skills');
		/*console.log('skills', skills);*/
		var flatten=_.flattenDeep( skills);
		/*console.log('flatten' , flatten);*/
		var uniq = _.uniq(flatten);
		/*console.log('uniq', uniq);*/
		var lowerCase=_.transform( uniq ,function(result, n){
			return result.push(_.lowerCase(n))
		}, []);
		/*console.log('lowerCase',lowerCase);*/
		alpha=_.sortBy(lowerCase, function(num){return num});
		console.log('skills alphabet',alpha);
	}

	function task2(array){
		var sort=_.sortBy(array, function(o){
			return o.friends.length;
		});
		/**/console.log('sort',sort);
		var name= _.map(sort, 'name');
		console.log('name sort through number of friends', name);
	}

	function task3(array){
		var friends=_.map(array, 'friends');
		/*console.log('friends', friends);*/
		var friendsFlatten=_.flatten(friends);
		/*console.log('friendsFlatten', friendsFlatten);*/
		var name=_.map(friendsFlatten, 'name');
		/*console.log('name', name);*/
		var uniq = _.uniq(name);
		console.log('uniq friends', uniq);
	}

	var str=JSON.stringify(data);
	/*console.log(str);*/
	var array = JSON.parse(str);
	/*console.log(array);*/

	console.log('*******************task 1***************************')
	task1(array);
	console.log('*******************task 2***************************')
	task2(array);
	console.log('*******************task 3***************************')
	task3(array);
})();
