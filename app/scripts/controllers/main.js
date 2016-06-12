'use strict';

/**
 * @ngdoc function
 * @name stmptaApp.controller:MainCtrl
 * @description # MainCtrl Controller of the stmptaApp
 */

angular.module('stmptaApp').controller(
		'AboutController',
		[
				'$scope',
				'$stateParams',
				'leadershipFactory',
				function($scope, $stateParams, leadershipFactory) {

					$scope.showLeaders = false;
					$scope.message = 'Loading ...';
					$scope.leaders = leadershipFactory.getLeaders().query(
							function(response) {
								$scope.leaders = response;
								$scope.showLeaders = true;
							},
							function(response) {
								$scope.message = 'Error: ' + response.status + ' '	+ response.statusText;
							});
				} ]).controller(
		'VolunteeringController',
		[
				'$scope',
				'$stateParams',
				'eventFactory',
				function($scope, $stateParams, eventFactory) {

					$scope.showEvents = false;
					$scope.message = 'Loading ...';
					$scope.events = eventFactory.getEvents().query(
							function(response) {
								console.log(response);
								$scope.events = response;
								$scope.showEvents = true;
							},
							function(response) {
								$scope.message = 'Error: ' + response.status + ' ' + response.statusText;
							});
				} ]);
