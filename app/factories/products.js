app.factory('ProductsService', function ($http) {
  return {
    // TODO: base this on the given search / category
    getProducts: function () {
      return new Promise(
        function (resolve, reject) {
          $http.get('/api/products')
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
