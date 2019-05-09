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
    this.state.transitionTo('view-post')
  }
}

export default PostCtrl;