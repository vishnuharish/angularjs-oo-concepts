 function TestConfig($stateProvider){
  'ngInject';
  $stateProvider.
  state('test',{
    url:'/test',
    controller: 'TestCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'test/test.html'
  });


};

export default TestConfig;



