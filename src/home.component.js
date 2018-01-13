var controller = function($scope) {
	$scope.newDescription = "";

	this.$onInit = function() {
		console.log("Hello");
	};

	$scope.onKeyPress = function($event) {
		if ($event.keyCode === 13) {
			$scope.onClickAdd();
		}
	}

	$scope.onClickAdd = function() {
		$scope.newDescription = "";
	}
}

export default {
	templateUrl: 'home.html',
	controller: controller
}