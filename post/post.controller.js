class PostCtrl {
  constructor($state, PostService){
    'ngInject';
    this.service = PostService;
    this.state = $state;
    this.posts =  null;
    this.getPosts();
  }

  getPosts(){
 this.service.posts().then(
    (res) => {
      this.posts = res.data
      // console.log(this.posts);
    }
  )
  }
  gotoPost = (postId) => {
    console.log(postId)
    this.state.go('posts.view-post',{'id':postId})
  }
}

export default PostCtrl;