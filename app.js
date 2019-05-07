import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './test'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'test'

];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);