
(function(){
  angular.module('ngWeather')
        .controller('SimpleController', SimpleController)

  SimpleController.$inject = ['$scope', 'WeatherService'];

  function SimpleController($scope, WeatherService){
    $scope.message = 'Something';
    console.log('stuff and things');
    WeatherService.getHourlyData(29, -82);
    WeatherService.getMinutelyData(29,-82);
    WeatherService.getDailyData(29,-82); 


  }

})();
