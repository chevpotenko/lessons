var task = angular.module('task',[]);

task.controller('taskController', ['$scope', function($scope){
	$scope.model = [
		{title:'HTML'},
		{title:'CSS'},
		{title:'JS'}
	];
	$scope.itemTitle='';
	$scope.editAt=0;
	$scope.editState=false;

	$scope.edit = function($event){
		if($scope.form.$invalid){
			return
		}
		else{
			if(!$scope.editState){
				$scope.model.push({title: $scope.itemTitle});
			}
			else{
				$scope.model[$scope.editAt].title=$scope.itemTitle;
			}
			$scope.itemTitle = '';
		}
	};

	$scope.delete = function(index){
		$scope.model.splice(index,1);
		$scope.itemTitle = '';
	};

	$scope.select = function(index){
		$scope.editAt=index;
		$scope.editState=true;
		$scope.itemTitle = $scope.model[index].title;
	};
}]);

task.directive('editTask', function(){
	return {
		link: function ($scope, $elem, $attrs){

			$scope.$watch('editState', function(){
				if($scope.editState){
					$elem.addClass('btn--edit').text('edit');
				}
			});

			$scope.$watchCollection('model', function(){
				if($scope.editState){
					$elem.removeClass('btn--edit').text('add');
					$scope.editState=false;
				}
			});

			$scope.$watch('itemTitle', function(){
				if(!$scope.itemTitle && $scope.editState){
					$elem.removeClass('btn--edit').text('add');
					$scope.editState=false;
				}
			});
		}
	}
})
