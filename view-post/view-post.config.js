function ViewPostConfig($stateProvider){
  'ngInject'
  console.log('config')
  $stateProvider
    .state('posts.view-post', {
      url: '/:id',
      controller: 'ViewPostCtrl',
      controllerAs: '$ctrl',
      templateUrl: './view-post.html',
      resolve: {
        post: (PostService, $state, $stateParams) => {
            return PostService.post($stateParams.id).then(
              (post) => {return post;},
              (err) => {$state.go('home')} 
            );
        }
      }
    })
}

export default ViewPostConfig