import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import headerComponent from './header.component';
import headerFactory from './header.factory';
import config from '../../config';

let headerModule = angular.module('header', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.header', {
      url: '/header',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}header/header.html`
		    }
	    }
    });
})

.directive('headerView', headerComponent)
.factory('header.factory', headerFactory); 

export default headerModule;
