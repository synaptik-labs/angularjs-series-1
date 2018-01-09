var controller = function($scope) {
	this.$onInit = function() {
		console.log("Hello");
	};
}

export default {
	templateUrl: 'home.html',
	controller: controller
}