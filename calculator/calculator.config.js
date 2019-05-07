function CalcConfig($stateProvider){
  '$ngInject'
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      controller: 'CalcCtrl',
      controllerAs: '$CalcCtrl',
      templateUrl: './calculator.html'
    });
};

export default CalcConfig;