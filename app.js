import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './test'
import './calculator'
import './calculator-directive'
import 'bootstrap/dist/css/bootstrap.css'
// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'test',
  'calc',
  'calculatorDirective'

];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);