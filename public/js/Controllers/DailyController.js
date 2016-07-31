
(function(){
  angular.module('ngWeather')
        .controller('DailyController', DailyController);

DailyController.$inject = ['$scope', 'WeatherService'];

function DailyController($scope, WeatherService){
  $scope.dailyData = WeatherService.weather;
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
    $scope.dailyData = value;
  });

  }
}());
