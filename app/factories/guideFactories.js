app.factory("GuideFactory", function($http, $q) {

  function getGuides() {

    return $q(function (resolve, reject) {

      $http.get(`../../data/guides.json`)

           .then(function(data) {
             resolve(data)
           });
            //$scope.list.push("another thing!")

  })
  }

  return {getGuides}
})
