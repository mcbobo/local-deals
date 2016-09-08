app.controller('SearchController', function (
  $scope,
  $log,
  $cookieStore,
  CategoriesService,
  ProductsService) {

  // See if there was any previous searches
  var search = $cookieStore.get('search');
  if (search) {
    $scope.search = search;
  }

  // Get the root categories -- they will be appended with ng-repeat
  CategoriesService.getRootCategories()
    .then(function (categories) {
      $scope.categories = categories;
    });

  // Temporary: get products to show, will have to do on search / category
  // selection in the future
  $scope.getProducts = function () {
    // Display temporary products
    ProductsService.getProducts()
      .then(function (products) {
        $scope.products = products;
      });

    // // Save the search
    // $scope.saveSearch($scope.search);
  };

  $scope.saveSearch = function(search) {
    $cookieStore.put('search', search);
  };
});
