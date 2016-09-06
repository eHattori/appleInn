'use strict';

function uploadCtrl($scope, FileUploader) {
  var uploader = $scope.uploader = new FileUploader({
    //url: 'scripts/upload.php'
  });

  // FILTERS

  uploader.filters.push({
    name: 'customFilter',
    fn: function (item /*{File|FileLikeObject}*/ , options) {
      return this.queue.length < 10;
    }
  });
}

angular
  .module('urbanApp')
  .controller('uploadCtrl', ['$scope', 'FileUploader', uploadCtrl]);
