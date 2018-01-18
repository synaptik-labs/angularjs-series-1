var controller = function($scope, $http) {
	$scope.newDescription = "";
	$scope.data = [];

	this.$onInit = function() {
		$scope.refresh();
	};

	$scope.refresh = function() {
		$http.get("http://localhost:8080/todo").then(function(response) {
			console.log(response.data);
			$scope.data = response.data;
		});
	}

	$scope.onKeyPress = function($event) {
		if ($event.keyCode === 13) {
			$scope.onClickAdd();
		}
	}

	$scope.onClickAdd = function() {
		var data = { description: $scope.newDescription };
		$http.post("http://localhost:8080/todo", data).then(function(response) {
			$scope.refresh();
			$scope.newDescription = "";
		});
	}
}

export default {
	templateUrl: 'home.html',
	controller: controller
}