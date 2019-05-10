function AddPostConfig($stateProvider){
'ngInject';
 $stateProvider
    .state('add-post', {
      url: '/add-post',
      controller: 'AddPostCtrl',
      controllerAs: '$ctrl',
      templateUrl: './add-post.html'
    });
}

export default AddPostConfig;