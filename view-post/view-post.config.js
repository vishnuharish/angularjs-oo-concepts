function ViewPostConfig($stateProvider){
  'ngInject'
  $stateProvider
    .state('view-post', {
      url: '/:id',
      controller: 'ViewPostCtrl',
      controllerAs: '$ctrl',
      templateUrl: './view-post.html',
      resolve: {
        post: (PostService, $state, $stateParams) => {
            return PostService.post($stateParams.id).then(
              (post) => {return post;}
            );
        }
      }
    })
}

export default ViewPostConfig