(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('clearMatrixBtn', clearMatrixBtn);

  /** @ngInject */
  function clearMatrixBtn() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveClearMatrixBtn/clearMatrixBtn.html',
      scope: {
        matrixes: '='
      },
      controller: clearMatrixBtnCtrl,
      bindToController: true
    };

    /** @ngInject */
    function clearMatrixBtnCtrl(matrixService) {
      var vm = this;

      vm.onClear = function() {
        vm.matrixes = matrixService.clearAll(vm.matrixes);
      }
    }
  }
})();
