(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.matrixes = [
      {
        title : 'a',
        content : [
          ['', ''],
          ['', ''],
          ['', ''],
          ['', '']
        ]
      },
      {
        title : 'b',
        content : [
          ['', '', ''],
          ['', '', '']
        ]
      }
    ];

    vm.result =[
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    vm.matrixError = false;

    vm.focus = false;

    vm.disableMultiplyMatrix = false;
  }
})();
