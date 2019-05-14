class EditPostCtrl {
  constructor(post, $scope, $state, PostService){
    'ngInject';
      this.scope = $scope;
      this.state = $state;
      this.post = post.data;
      this.service = PostService;
      this.showLoader = this.post ? false : true;
    }
  submitPost = () => {
    this.service.updatePost(this.post).then(
      (res) => {
        console.log('Updated Successfully!!')
        this.state.go('view-post', {"id": this.post.id})
      }
    )
  }
  cancel = () => {
    this.state.go('view-post', {"id": this.post.id})
  }
}

export default EditPostCtrl;