

(function(){
  angular.module('ngWeather')
        .controller('HourlyController', HourlyController);

HourlyController.$inject = ['$scope', 'WeatherService'];

function HourlyController($scope, WeatherService){
  $scope.hourlyData = WeatherService.weather;
  $scope.iconLookup = {
    'rain': 'images/rain.gif',
    'clear-night': 'images/clear-night.png',
    'clear-day': 'images/clear-day.png',
    'partly-cloudy-night': 'images/partly-cloudy-night.png',
    'partly-cloudy-day': 'images/partly-cloudy-day.png'

  };
  $scope.$watch(function(){
    return WeatherService.weather;

  }, function(value){
    $scope.hourlyData = value;
  });

  }
}());
