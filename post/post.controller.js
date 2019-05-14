class PostCtrl {
  constructor($state, PostService){
    'ngInject';
    this.service = PostService;
    this.state = $state;
    this.posts =  null;
    this.getPosts();
    this.showLoader = true
  }

  getPosts(){
 this.service.posts().then(
    (res) => {
      this.showLoader = false;
      this.posts = res.data
      // console.log(this.posts);
    }
  )
  }
  gotoPost = (postId) => {
    console.log("from controller" + postId)
    this.state.transitionTo('view-post', {"id": postId})
  }
  addPost = () => {
    console.log("goto add-post");
    this.state.transitionTo('add-post');
  }

  editPost = (postId) => {
    this.state.transitionTo('edit-post', {"id": postId})
  }

   deletePost = (postId) => {
     this.service.deletePost(postId).then(
       (res) => { 
         console.log("Post Deleted");
         this.getPost();
       }
     )

  }
}

export default PostCtrl;