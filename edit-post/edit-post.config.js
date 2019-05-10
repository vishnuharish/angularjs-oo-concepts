function EditPostConfig($stateProvider){
  'ngInject';
  $stateProvider
    .state('edit-post', {
      url:"/post/:id",
      controller: 'EditPostCtrl',
      controllerAs: '$ctrl',
      templateUrl: './edit-post.html',
      resolve: {
        post: (PostService, $stateParams) => {
            console.log($stateParams)
           return PostService.post($stateParams.id).then(
              (post) => { return post;} ,
              (err) => {console.log(err);}
            );
        } 
      }
    })
}

export default EditPostConfig;