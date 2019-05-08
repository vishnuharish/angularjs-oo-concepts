export default class PostCtrl {
  constructor($state, postSvc){

    this.service = postSvc;
    this.state = $state;
    this.posts = this.getPosts()
    this.baseUrl = 'https://api.myjson.com/bins/awrq2';

  }

  getPosts = () => {
   return []; 
  }
}