/**
 * Created by ManjeshV on 9/23/2015.
 */
(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/views/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('HomeCtrl', function($scope, $rootScope, $location, $stateParams, $http,categoryFactory,productFactory ) {

    $rootScope.checkoutFlag = false;

  });

}).call(this);
