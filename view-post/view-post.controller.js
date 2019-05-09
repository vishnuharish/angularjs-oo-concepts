class ViewPostCtrl{
  constructor(post, PostService){
    'ngInject'
    this.post = post;
    console.log("from controller" + post);
  }
}
export default ViewPostCtrl;