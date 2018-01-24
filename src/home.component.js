var controller = function($scope, $http, $mdDialog) {
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

	$scope.onClickRemove = function(item) {
		$http.delete("http://localhost:8080/todo/" + item.id).then(function(response) {
			$scope.refresh();
		});
	}

	$scope.onClickUpdate = function(item) {
		var confirm = $mdDialog.prompt()
			.title('Update entry')
			.textContent('Description')
			.placeholder('Description')
			.ariaLabel('Description')
			.initialValue(item.description)
			.required(true)
			.ok('Okay')
			.cancel('Cancel');

		$mdDialog.show(confirm).then(function(newDescription) {
			var data = { description: newDescription };
			$http.put("http://localhost:8080/todo/" + item.id, data).then(function(response) {
				$scope.refresh();
			});
		}).catch(function(error) {
			console.log("User pressed cancel!");
		});
	}
}

export default {
	templateUrl: 'home.html',
	controller: controller
}