function PostConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('posts', {
    url: '/posts',
    controller: 'PostCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'post/posts.html'
  })

};

export default PostConfig;