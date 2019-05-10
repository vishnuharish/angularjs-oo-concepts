import angular from 'angular';
let addPostModule = angular.module('addPost', []);

import AddPostConfig from './add-post.config';
addPostModule.config(AddPostConfig);

import AddPostCtrl from './add-post.controller';
addPostModule.controller('AddPostCtrl', AddPostCtrl);

export default addPostModule;