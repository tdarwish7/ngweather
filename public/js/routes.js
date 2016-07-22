

(function(){
  angular.module('ngWeather')
        .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'html/views/home.html',
    controller: 'HomeController'
  })
  .when('/hourly', {
    template: 'hourly'
  })
  .when('/minutely', {
    template: 'minutely'
  })
  .when('/daily', {
    template: 'daily'
  })
  .otherwise({
    redirectTo: '/'
  });


  }
})();
