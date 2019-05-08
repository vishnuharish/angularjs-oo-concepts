class PostService{
  constructor($http){
    'ngInject';
    this.http = $http;
    this.baseUrl = 'https://api.myjson.com/bins/awrq2';
  }
  posts = () => {
    return this.http.get(this.baseUrl)
  }
}