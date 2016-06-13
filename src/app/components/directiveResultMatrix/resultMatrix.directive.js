(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .directive('resultMatrix', resultMatrix);

  /** @ngInject */
  function resultMatrix() {
    return {
      restrict: 'E',
      controllerAs: 'vm',
      templateUrl: 'app/components/directiveResultMatrix/resultMatrix.html',
      scope: {
        result: '='
      },
      controller: resultMatrixCtrl,
      bindToController: true
    };

    /** @ngInject */
    function resultMatrixCtrl() {
      var vm = this;
    }
  }
})();
