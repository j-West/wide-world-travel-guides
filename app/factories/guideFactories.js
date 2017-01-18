app.factory("GuideFactory", function($http, $q) {

  function getGuides() {
       return $http.get(`../../data/guides.json`)
  };

  return {getGuides}
})
