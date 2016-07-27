
(function(){
  angular.module('ngWeather')
        .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'WeatherService'];

function HomeController($scope, WeatherService){
  $scope.updateHourly = updateHourly;
  $scope.updateMinutely = updateMinutely;
  $scope.updateDaily = updateDaily;
  $scope.latitude = 29;
  $scope.longitude = -82;

  function updateHourly(latitude, longitude){
    WeatherService.getHourlyData(latitude, longitude);
  }
  function updateMinutely(latitude, longitude){
    WeatherService.getMinutelyData(latitude, longitude);
  }
  function updateDaily(latitude, longitude){
    WeatherService.getDailyData(latitude, longitude);
  }

  }
}());
