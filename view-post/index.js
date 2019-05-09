import angular from 'angular';

let viewPostModule = angular.module('viewPost', []);

import ViewPostConfig from './view-post.config';
viewPostModule.config(ViewPostConfig);

import ViewPostCtrl from './view-post.controller';
viewPostModule.controller('ViewPostCtrl', ViewPostCtrl);

export default viewPostModule;