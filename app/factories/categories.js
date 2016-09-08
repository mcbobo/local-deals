app.factory('CategoriesService', function ($http, $log) {
  return {
    getRootCategories: function () {
      return new Promise(
        function (resolve, reject) {
          $http.get('/api/rootcategories')
            .then(function (data) {
              resolve(data.data);
            })
            .catch(function (err) {
              reject(err);
            });
        }
      );
    }
  };
});
