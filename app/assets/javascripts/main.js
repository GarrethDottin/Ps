angular.module("App", ['ngCookies'])
	.value('user', {
		username: '',
		firstName: ''
	})
	.controller("ApplicationController", ["$scope", function($scope){
		$scope.setUser = setUser;
		$scope.statement = "What can you do in 25 minutes?";
		$scope.currentUser = 'guest';
		$scope.close = function (event) { dom.closeModal(event)};

		$scope.closeModal = false;
		var setUser = function (user) {

		$scope.currentUser = user;
		};
	}]);