app.directive('projInfo', function(){
  return{
    restrict: 'E',
    scope: {
      proj: '='
    },
    templateUrl: 'js/directives/templates/projectInfo.html'
  };
});