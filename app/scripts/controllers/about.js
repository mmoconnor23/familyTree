'use strict';

/**
 * @ngdoc function
 * @name familyTreeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the familyTreeApp
 */
angular.module('familyTreeApp')
  .controller('AboutCtrl', function ( $scope, treeData ) {
  	var vm = this;
  	vm.familyData = treeData.getFamily();
  });
