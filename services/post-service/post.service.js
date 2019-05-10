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
  getPostComments = (postId) => {
    return this.http({
      url: `${this.baseUrl}/${postId}/comments`,
      method: 'GET'
    })
  }
  addPost = (post) => {
    return this.http({
      url: `${this.baseUrl}`,
      method: 'POST',
      data: post
    })
  }
}

export default PostService;