import angular from 'angular';

let calculatorDirective = angular.module('calculatorDirective', [])

import CalculatorDirective from './calculator-directive.directive';
calculatorDirective.directive('confirmClick', CalculatorDirective);

export default calculatorDirective;