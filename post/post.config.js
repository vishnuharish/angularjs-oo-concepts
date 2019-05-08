function PostConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('post', {
    url: '/post',
    controller: 'PostCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'post/post.html'
  });

};

export default PostConfig;