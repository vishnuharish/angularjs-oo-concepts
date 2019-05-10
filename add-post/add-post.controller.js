class AddPostCtrl {
  constructor($state, PostService){
    'ngInject'
    this.state = $state;
    this.service = PostService;
    this.post = {title: ""}
  }

  addPost = () => {
     console.log(this.post);
  }

  cancel = () => {
    console.log("cancelled navigate to posts");
  }

}

export default AddPostCtrl;