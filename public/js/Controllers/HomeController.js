
(function(){
  angular.module('ngWeather')
        .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'WeatherService'];

function HomeController($scope, WeatherService){
  $scope.updateHourly = updateHourly;
  $scope.updateMinutely = updateMinutely;
  $scope.updateDaily = updateDaily;

  function updateHourly(latitude, longitude){
    WeatherService.getHourlyData(latitude, longitude);
  }
  function updateMinutely(latitude, longitude){}
  function updateDaily(latitude, longitude){}

  }
}());
