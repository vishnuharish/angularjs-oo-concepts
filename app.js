import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
// Import your app functionality
import './home'
import './test'
import './calculator'
import './calculator-directive'
import './services/post-service'
// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'test',
  'calc',
  'calculatorDirective',
  'postSvc'

];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);