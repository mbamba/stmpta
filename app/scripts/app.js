'use strict';

/**
 * @ngdoc overview
 * @name stmptaApp
 * @description
 * # stmptaApp
 *
 * Main module of the application.
 */
angular
  .module('stmptaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
	])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // route for the home page
    .state('app', {
        url:'/',
        views: {
            'header': {
                templateUrl : 'views/header.html',
            },
            'content@': {
                templateUrl : 'views/home.html'
            },
            'footer': {
                templateUrl : 'views/footer.html',
            }
        }

    })

    // route for the fundraising page
    .state('app.fundraising', {
        url:'fundraising',
        views: {
            'content@': {
                templateUrl : 'views/fundraising.html'                
            }
        }
    })

    // route for the volunteering page
    .state('app.volunteering', {
        url:'volunteering',
        views: {
            'content@': {
                templateUrl : 'views/volunteering.html',
                controller  : 'VolunteeringController'                  
            }
        }
    })
    
    // route for the about us page
    .state('app.aboutus', {
        url:'aboutus',
        views: {
            'content@': {
                templateUrl : 'views/aboutus.html',
                controller  : 'AboutController'                  
            }
        }
    });
    
    $urlRouterProvider.otherwise('/');
  });
