class PostService{
  constructor($http){
    'ngInject';
    this.http = $http;
    this.baseUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';
  }
  posts = () => {
    return this.http({
      url: this.baseUrl,
      method: 'GET'
    })
  }
  post = (postId) => {
    console.log(postId)
     return this.http({
      url: `${this.baseUrl}/${postId}`,
      method: 'GET'
    })
  }
}

export default PostService;