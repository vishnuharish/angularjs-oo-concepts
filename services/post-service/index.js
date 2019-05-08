import angular from 'angular';
let postServiceModule = angular.module('postService', []);

import PostService from './post.service'
postServiceModule.service('PostService', PostService);

export default postServiceModule;
