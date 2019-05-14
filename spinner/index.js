import angular from 'angular';

let spinnerModule = angular.module('spinner', [])

import spinner from './spinner.directive';
spinnerModule.directive('spinner', spinner);

export default spinnerModule;