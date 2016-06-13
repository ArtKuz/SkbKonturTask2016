(function() {
  'use strict';

  angular
    .module('skbKonturTask')
    .service('matrixService', matrixService);

  /** @ngInject */
  function matrixService(toastr,
                         _) {
    return {
      reverse: function(matrixArr) {
        if (matrixArr.length < 1) {
          toastr.error('Матриц не найдено', 'Ошибка!');
          return matrixArr;
        } else if (matrixArr.length < 2) {
          toastr.warning('У Вас используется только 1 матрица', 'Предупреждение!');
          return matrixArr;
        } else {
          var titleArr = _.map(matrixArr, 'title'),
            reverseArr = _.reverse(matrixArr);

          _.forEach(reverseArr, function(value, key) {
            value.title = titleArr[key];
          });

          toastr.success('Матрицы поменяны местами!');
          return reverseArr;
        }
      },
      clearAll: function(matrixArr) {
        _.forEach(matrixArr, function(matrix) {
          _.forEach(matrix.content, function(row) {
            row = _.fill(row, '');
          })
        });

        return matrixArr;
      },
      getClearRow: function(row) {
        var newRow = _.clone(row);
        return _.fill(newRow, '');
      },
      multiplyMatrix: function(matrixA, matrixB) {
        var rowsA = matrixA.length,
            colsA = matrixA[0].length,
            rowsB = matrixB.length,
            colsB = matrixB[0].length,
            matrixC = [];

        if (colsA != rowsB) {
          toastr.error('Такие матрицы нельзя перемножать, так как количество столбцов матрицы А не равно количеству строк матрицы B.', 'Ошибка!');
          return [];
        }

        for (var i = 0; i < rowsA; i++) matrixC[i] = [];

        for (var k = 0; k < colsB; k++) {
          for (var i = 0; i < rowsA; i++) {
            var temp = 0;
            for (var j = 0; j < rowsB; j++) temp += matrixA[i][j] * matrixB[j][k];
            matrixC[i][k] = temp;
          }
        }

        toastr.success('Матрица A успешно умножена на Матрицу B!');
        return matrixC;
      }
    }
  }

})();
