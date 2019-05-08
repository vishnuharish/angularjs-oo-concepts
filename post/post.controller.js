class PostCtrl {
  constructor($state, PostService){
    'ngInject';
    this.service = PostService;
    this.state = $state;
    this.posts = this.getPosts(); 
  }

  getPosts(){
  this.service.posts()
  }
}

export default PostCtrl;