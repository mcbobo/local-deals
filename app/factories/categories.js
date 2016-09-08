app.factory('CategoriesService', function() {
  return {
    getRootCategories: function() {
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
