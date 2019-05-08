class PostService{
  constructor($http){
    'ngInject';
    this.http = $http;
    this.baseUrl = 'https://api.myjson.com/bins/awrq2';
  }
  posts = () => {
    return this.http({
      url: this.baseUrl,
      method: 'GET'
    }).then(
      (res) => {
        return res.data
      }
    )
  }
}

export default PostService;