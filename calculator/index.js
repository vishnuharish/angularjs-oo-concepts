import angular from 'angular';

let calcModule = angular.module('calc', [])

import CalcConfig from './calculator.config';
calcModule.config(CalcConfig);

import CalcCtrl from './calculator.controller';
calcModule.controller('CalcCtrl', CalcCtrl);

export default calcModule;