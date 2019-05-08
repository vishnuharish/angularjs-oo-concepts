export default class PostCtrl {
  constructor($state, postSvc){

    this.service = postSvc;
    this.state = $state;
    this.posts = this.getPosts();
    

  }

  getPosts = () => {
  this.service.posts().then(
    (res) => {
      console.log(res)
      return res.data;
    }
  )
  }
}