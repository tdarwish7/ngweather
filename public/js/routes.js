

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
    templateUrl: 'html/views/hourly.html',
    controller: 'HourlyController'
  })
  .when('/minutely', {
    templateUrl: 'html/views/minutely.html',
    controller: 'MinutelyController'
  })
  .when('/daily', {
    templateUrl: 'html/views/daily.html',
    controller: 'DailyController'
  })
  .otherwise({
    redirectTo: '/'
  });


  }
})();
