class ViewPostCtrl{
  constructor(post, PostService, $state){
    'ngInject'
    this.post = post.data;
    this.comments = null;
    this.service = PostService
    this.postComments(this.post.id)
    this.state = $state;
  }
  postComments = (postId) => {
      this.service.getPostComments(postId).then(
        (res) => { this.comments = res.data},
        (err) => { console.log(err)}
      )
  }
  gotoPosts = () => {
      this.state.transitionTo('posts');
  }
}
export default ViewPostCtrl;