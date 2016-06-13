(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('matrix', matrix);

  /** @ngInject */
  function matrix() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveMatrix/matrix.html',
      scope: {
        matrixes: '=',
        id: '=',
        focus: '=',
        disableMultiplyMatrix: "="
      },
      controller: matrixCtrl,
      bindToController: true
    };

    /** @ngInject */
    function matrixCtrl(_) {
      var vm = this,
          errorInputArr = {};

      vm.onFocus = function() {
        vm.focus = true;
      };

      vm.onBlur = function() {
        vm.focus = false;
      };

      vm.change = function(value, rowIndex, itemIndex) {
        var el = String(rowIndex) + String(itemIndex);

        if (value == undefined) {
          errorInputArr[el] = true;
          vm.disableMultiplyMatrix = true;
        } else {
          if (errorInputArr[el]) {
            delete errorInputArr[el];
          }
          if (_.size(errorInputArr) === 0) {
            vm.disableMultiplyMatrix = false;
          }
        }
      };
    }
  }
})();
