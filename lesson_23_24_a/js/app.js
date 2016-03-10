var task = angular.module('task',[]);

task.controller('taskController', ['$scope', function($scope){

	$scope.model = [
		{title:'HTML'},
		{title:'CSS'},
		{title:'JS'}
	];
	$scope.itemTitle='';
	$scope.editAt = 0;
	$scope.mode = true;

	$scope.edit = function($event){
		if($scope.form.$invalid){
			return
		}
		else{
			if($scope.mode){
				$scope.model.push({title: $scope.itemTitle});
			}
			else{
				$scope.model[$scope.editAt].title=$scope.itemTitle;
				$scope.mode = true;
			}
			$scope.itemTitle = '';
		}
	};

	$scope.delete = function(index){
		$scope.model.splice(index, 1);
		$scope.itemTitle = '';
		$scope.mode = true;
	};

	$scope.select = function(index){
		$scope.editAt=index;
		$scope.itemTitle = $scope.model[index].title;
		$scope.mode = false;
	};

	$scope.change = function() {
		if($scope.form.$invalid){
			$scope.mode = true;
		}
	};
}]);
