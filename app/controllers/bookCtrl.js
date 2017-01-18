app.controller("BookCtrl", function($scope, $http, GuideFactory) {
  console.log("BookCtrl")

GuideFactory.getGuides().then(function (data) {
  $scope.guides = data;
  console.log(data.data.guides);
  })



});