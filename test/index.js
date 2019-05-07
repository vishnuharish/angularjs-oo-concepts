import angular from 'angular';

let testModule = angular.module('test', []);

import TestConfig from './test.config'

testModule.config(TestConfig);

import TestCtrl from './test.controller'
testModule.controller('TestCtrl', TestCtrl);

export default testModule;