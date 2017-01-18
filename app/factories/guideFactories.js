app.factory("GuideFactory", function($http) {

  function getGuides() {
       return $http.get(`../../data/guides.json`)
  };

  return {getGuides}
});



