(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('reverseMatrixBtn', reverseMatrixBtn);

  /** @ngInject */
  function reverseMatrixBtn() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveReverseMatrixBtn/reverseMatrixBtn.html',
      scope: {
        matrixes: '='
      },
      controller: reverseMatrixCtrl,
      bindToController: true
    };

    /** @ngInject */
    function reverseMatrixCtrl(matrixService) {
      var vm = this;

      vm.onReverse = function() {
        vm.matrixes = matrixService.reverse(vm.matrixes);
      };
    }
  }
})();
