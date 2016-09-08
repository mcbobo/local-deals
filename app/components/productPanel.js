app.directive("productPanel", function ($log) {
  return {
    restrict: "E",
    scope: {
      products: '='
    },
    templateUrl: "app/components/productPanel.html"
  }
});
