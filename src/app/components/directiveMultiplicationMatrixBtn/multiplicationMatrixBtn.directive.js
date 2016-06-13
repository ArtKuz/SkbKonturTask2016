(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('multiplicationMatrixBtn', multiplicationMatrixBtn);

  /** @ngInject */
  function multiplicationMatrixBtn() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveMultiplicationMatrixBtn/multiplicationMatrixBtn.html',
      scope: {
        matrixes: '=',
        result: '=',
        matrixError: '=',
        disableMultiplyMatrix: '='
      },
      controller: multiplicationMatrixBtnCtrl,
      bindToController: true
    };

    /** @ngInject */
    function multiplicationMatrixBtnCtrl($scope,
                                         matrixService) {
      var vm = this;

      $scope.$watchCollection(function() {
        return vm.matrixes[0].content[0]
      }, function(newVal) {
        vm.matrixError = newVal.length !== vm.matrixes[1].content.length;
      });

      $scope.$watchCollection(function() {
        return vm.matrixes[1].content
      }, function(newVal) {
        vm.matrixError = newVal.length !== vm.matrixes[0].content[0].length;
      });

      vm.multiplyMatrix = function() {
        vm.result = matrixService.multiplyMatrix(vm.matrixes[0].content, vm.matrixes[1].content);
      }
    }
  }
})();
