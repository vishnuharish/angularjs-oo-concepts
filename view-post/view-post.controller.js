class ViewPostCtrl{
  constructor(post, PostService){
    'ngInject'
    this.post = post.data;
    this.comments = null;
    this.service = PostService
    this.postComments(this.post.id)
  }
  postComments = (postId) => {
      this.service.getPostComments(postId).then(
        (res) => { this.comments = res.data},
        (err) => { console.log(err)}
      )
  }
}
export default ViewPostCtrl;