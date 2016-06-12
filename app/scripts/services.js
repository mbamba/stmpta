'use strict';

angular.module('stmptaApp')
	.constant('baseURL','http://192.168.10.72:3000/')
	
	.factory('leadershipFactory', ['$resource', 'baseURL', function($resource,baseURL) {
	
	    var ldrfac = {};
	
	    // Implement two functions, one named getLeaders,
	    // the other named getLeader(index)
	    ldrfac.getLeaders = function() {
	        return $resource(baseURL+'leadership/:id', null, null);
	    };
	
	    ldrfac.getLeader = function (index) {
	        return $resource(baseURL+'leadership/:id', {id:index}, null);
	    };
	
	    return ldrfac;
	}])
	
	.factory('eventFactory', ['$resource', 'baseURL', function($resource,baseURL) {
	
	    var eventfac = {};
	
	    // Implement two functions, one named getEvents,
	    // the other named getEvent(index)
	    eventfac.getEvents = function() {
	        return $resource(baseURL+'event/:id', null, null);
	    };
	
	    eventfac.getEvent = function (index) {
	        return $resource(baseURL+'event/:id', {id:index}, null);
	    };
	
	    return eventfac;
	}])
	;

