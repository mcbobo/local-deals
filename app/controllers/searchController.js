app.controller('SearchController', function (
  $scope,
  $log,
  CategoriesService,
  ProductsService) {

  // Get the root categories -- they will be appended with ng-repeat
  CategoriesService.getRootCategories()
    .then(function(categories) {
      $scope.categories = categories;
    });

  // Temporary: get products to show, will have to do on search / category
  // selection in the future
  $scope.getProducts = function() {
    ProductsService.getProducts()
      .then(function(products) {
        $scope.products = products;
      })
  };
});
