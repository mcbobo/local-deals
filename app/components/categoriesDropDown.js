app.directive("categoriesDropDown", function () {
  return {
    link: function (scope, element, attrs) {
      scope.$watch("rootCategories", function (categories) {
        angular.element(element).append("testing");
        // function createDropDownLink(link, text) {
        //   $log.log(arguments);
        //   $('#categories-dropdown').append(`
        //     <li><a href="${link}">${text}</a></li>
        //   `);
        // }
        // function ()angular.element(element).append();
      });
    },
    templateUrl: "categoriesDropDown.html"
  }
});
