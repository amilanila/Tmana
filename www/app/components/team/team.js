import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import teamComponent from './team.component';
import teamFactory from './team.factory';
import config from '../../config';

let teamModule = angular.module('team', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.team', {
      url: '/team',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}team/team.html`
		    }
	    }
    });
})

.directive('team', teamComponent)
.factory('team.factory', teamFactory); 

export default teamModule;
