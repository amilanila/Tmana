import template from './header.component.html';
import controller from './header.controller';

let headerComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default headerComponent;
