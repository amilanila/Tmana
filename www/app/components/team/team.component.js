import template from './team.component.html';
import controller from './team.controller';


let teamComponent = function () { 
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default teamComponent;
