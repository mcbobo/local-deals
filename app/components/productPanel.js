app.directive("productPanel", function($log) {
  return {
    // link: function(scope, element, attrs) {
    //   $log.log(scope, element, attrs);
    //   scope.$watch("products", function(products) {
    //   });
    // },
    restrict: "E",
    scope: {
      products: '='
    },
    templateUrl: "app/components/productPanel.html"
  }
});
