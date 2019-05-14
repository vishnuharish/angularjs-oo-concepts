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
import './post'
import './view-post'
import './add-post'
import './edit-post'
import './spinner'
// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'test',
  'calc',
  'postService',
  'post',
  'calculatorDirective',
  'viewPost',
  'addPost',
  'edit-post',
  'spinner'

];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);