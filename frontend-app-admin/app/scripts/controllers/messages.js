'use strict';

function MessagesCtrl($scope, messages) {

  $scope.folders = [{
    name: 'Inbox',
    folder: 'inbox',
    value: 78
    }, {
    name: 'Sent Mail',
    folder: 'sent'
    }, {
    name: 'Starred',
    folder: 'starred'
    }, {
    name: 'Draft',
    folder: 'draft'
    }, {
    name: 'Trash',
    folder: 'trash'
    }];

  $scope.tags = [{
    name: 'Personal',
    color: 'primary',
    }, {
    name: 'Clients',
    color: 'success'
    }, {
    name: 'Family',
    color: 'warning'
    }, {
    name: 'Friends',
    color: 'danger'
    }, {
    name: 'Archives',
    color: 'default'
    }];

  $scope.currentTag = null;

  $scope.setCurrentTag = function (tag) {
    $scope.currentTag = tag;
  };

  $scope.isCurrentTag = function (tag) {
    return $scope.currentTag !== null && tag.name === $scope.currentTag.name;
  };

  this.messages = [];

  messages.getAll().then(angular.bind(this, function then() {
    $scope.messages = messages.messages;
  }));

  $scope.currentMessage = null;

  $scope.setCurrentMessage = function (id) {
    messages.getById(id).then(angular.bind(this, function then() {
      $scope.currentMessage = messages.message[0];
    }));
  };

}

angular
  .module('urbanApp')
  .controller('MessagesCtrl', ['$scope', 'messages', MessagesCtrl]);
