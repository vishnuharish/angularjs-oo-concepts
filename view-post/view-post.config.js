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
            return PostService.post(1).then(
              (post) => {return post;},
              (err) => {console.log(err);$state.go('home')} 
            );
        }
      }
    })
}

export default ViewPostConfig