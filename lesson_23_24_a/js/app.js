var task = angular.module('task',[]);

task.controller('taskController', ['$scope', function($scope){

	var firstMode='add';
	var secondMode='edit';

	$scope.model = [
		{title:'HTML'},
		{title:'CSS'},
		{title:'JS'}
	];
	$scope.itemTitle='';
	$scope.editAt = 0;
	$scope.btnText = firstMode;

	$scope.edit = function($event){
		if($scope.form.$invalid){
			return
		}
		else{
			if($scope.btnText == firstMode){
				$scope.model.push({title: $scope.itemTitle});
			}
			else{
				$scope.model[$scope.editAt].title=$scope.itemTitle;
				$scope.btnText = firstMode
			}
			$scope.itemTitle = '';
		}
	};

	$scope.delete = function(index){
		$scope.model.splice(index, 1);
		$scope.itemTitle = '';
	};

	$scope.select = function(index){
		$scope.editAt=index;
		$scope.itemTitle = $scope.model[index].title;
		$scope.btnText = secondMode;
	};

	$scope.$watch('itemTitle', function(){
		if(!$scope.itemTitle && ($scope.btnText == secondMode)){
			$scope.btnText = firstMode;
		}
	});
}]);
