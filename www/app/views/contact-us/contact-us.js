(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('contact-us routing')
    $stateProvider

      .state('app.contact-us', {
        url: '/contact-us',
        views: {
          'menuContent': {
            templateUrl: 'app/views/contact-us/contact-us.html',
            controller: 'ContactUsCtrl'
          }
        }
      });

  });



  'use strict';

  angular.module('starter').controller('ContactUsCtrl', function($scope, $rootScope, $location, $stateParams,loginFactory) {
    console.log('ContactUsCtrl controller')


    // Use webstorm or any tool shows javascript errors. Otherwise simply you will waste time
   })

}).call(this);
