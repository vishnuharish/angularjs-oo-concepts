class AddPostCtrl {
  constructor($state, PostService){
    'ngInject'
    this.state = $state;
    this.service = PostService;
    this.post = {title: ""};
  }

  addPost = () => {
     this.service.addPost(this.post).then(
       (res) => {
         console.log("saved Successfully !!");
         this.state.go('posts')
       },
       (err) => {
          alert(err.toString())
       }
     )
  }

  cancel = () => {
   this.state.go('posts')
  }

}

export default AddPostCtrl;