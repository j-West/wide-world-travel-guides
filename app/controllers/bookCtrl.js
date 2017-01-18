app.controller("BookCtrl", function($scope, $http) {
  console.log("BookCtrl")

  $http.get(`../../data/guides.json`)
       .then(function(val){
         console.log(val.data);
         $scope.guides = val.data.guides;
         //$scope.list.push("another thing!")
       })

});