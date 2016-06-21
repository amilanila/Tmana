import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';
import Header from './header/header';
import Team from './team/team';

let componentModule = angular.module('app.components', [  
  Menu.name,
  Home.name,
  About.name,
  Header.name,
  Team.name
]);

export default componentModule;