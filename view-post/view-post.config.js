function ViewPostConfig($stateProvider){
  'ngInject'
  $stateProvider
    .state('view-post', {
      url: '/post',
      controller: 'ViewPostCtrl',
      controllerAs: '$ctrl',
      templateUrl: './view-post.html',
      resolve: {
        post: (PostService, $state, $stateParams) => {
            return PostService.post($stateParams.postId).then(
              (post) => {return post;},
              (err) => {console.log(err);$state.go('home')} 
            );
        }
      }
    })
}

export default ViewPostConfig