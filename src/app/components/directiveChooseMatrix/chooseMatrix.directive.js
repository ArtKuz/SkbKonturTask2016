(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('chooseMatrix', chooseMatrix);

  /** @ngInject */
  function chooseMatrix() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveChooseMatrix/chooseMatrix.html',
      scope: {
        matrixes: '='
      },
      controller: chooseMatrixCtrl,
      bindToController: true
    };

    /** @ngInject */
    function chooseMatrixCtrl(MATRIX_MAX,
                              MATRIX_MIN,
                              toastr,
                              matrixService,
                              _) {
      var vm = this,
          activeMatrixId = 0;

      vm.disableAddRowBtn = false;
      vm.disableRemoveRowBtn = false;
      vm.disableAddColumnBtn = false;
      vm.disableRemoveColumnBtn = false;

      vm.onActiveMatrixId = function(id) {
        activeMatrixId = id;
        vm.disableAddRowBtn = vm.matrixes[activeMatrixId].content.length >= MATRIX_MAX;
        vm.disableRemoveRowBtn = vm.matrixes[activeMatrixId].content.length <= MATRIX_MIN;
        vm.disableAddColumnBtn = vm.matrixes[activeMatrixId].content[0].length >= MATRIX_MAX;
        vm.disableRemoveColumnBtn = vm.matrixes[activeMatrixId].content[0].length <= MATRIX_MIN;
      };

      vm.onAddRow = function() {
        if (vm.matrixes[activeMatrixId].content.length < MATRIX_MAX) {
          vm.matrixes[activeMatrixId].content.push(matrixService.getClearRow(vm.matrixes[activeMatrixId].content[0]));
          vm.disableRemoveRowBtn = false;
        } else {
          toastr.error('В массиве может быть не более ' + MATRIX_MAX + ' строк', 'Ошибка!');
          vm.disableAddRowBtn = true;
        }
      };

      vm.onRemoveRow = function() {
        if (vm.matrixes[activeMatrixId].content.length > MATRIX_MIN) {
          vm.matrixes[activeMatrixId].content.splice(-1,1);
          vm.disableAddRowBtn = false;
        } else {
          toastr.error('В массиве может быть не менее ' + MATRIX_MIN + ' строк', 'Ошибка!');
          vm.disableRemoveRowBtn = true;
        }
      };

      vm.onAddColumn = function() {
        if (vm.matrixes[activeMatrixId].content[0].length < MATRIX_MAX) {
          _.forEach(vm.matrixes[activeMatrixId].content, function(row) {
            row.push('');
          });
          vm.disableRemoveColumnBtn = false;
        } else {
          toastr.error('В массиве может быть не более ' + MATRIX_MAX + ' столбцов', 'Ошибка!');
          vm.disableAddColumnBtn = true;
        }
      };

      vm.onRemoveColumn = function() {
        if (vm.matrixes[activeMatrixId].content[0].length > MATRIX_MIN) {
          _.forEach(vm.matrixes[activeMatrixId].content, function(row) {
            row.splice(-1,1);
          });
          vm.disableAddColumnBtn = false;
        } else {
          toastr.error('В массиве может быть не менее ' + MATRIX_MIN + ' столбцов', 'Ошибка!');
          vm.disableRemoveColumnBtn = true;
        }
      }
    }
  }
})();
