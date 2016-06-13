(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
