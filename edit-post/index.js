import angular from 'angular';
let editPostModule = angular.module('edit-post', [])

import EditPostConfig from './edit-post.config';
editPostModule.config(EditPostConfig);

import EditPostCtrl from './edit-post.controller'
editPostModule.controller('EditPostCtrl', EditPostCtrl);

export default editPostModule;