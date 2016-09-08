app.factory('CategoriesService', function($http, $log) {
  return {
    getRootCategories: function() {
      //$http.get("http://somedomain.com/someAPIEndpoint")
      //  .then(function(data){ doSomethingWithData(data) })

      return new Promise(
        function(resolve, reject) {
          mockRootCategoriesCall()
            .then(function(data) {
              resolve(data);
            })
            .catch(function(err) {
              reject(err);
            });
        }
      );
    }
  };
});

function mockRootCategoriesCall() {
  return new Promise(
    function(resolve, reject) {
      resolve(
        [
          "Electronics",
          "Clothing",
          "Cars",
          "Books"
        ]
      );
    }
  );
}
