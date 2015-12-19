(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('Products routing')
    $stateProvider

      .state('app.products', {
        url: '/eventlist/:cateid',
        views: {
          'menuContent': {
            templateUrl: 'app/views/eventlist/eventlist.html',
            controller: 'EventlistCtrl'
          }
        }
      });

  });



  'use strict';

  angular.module('starter').controller('EventlistCtrl', function($scope, $rootScope, $location,$state, $stateParams,$http, LS ) {
  });

}).call(this);
