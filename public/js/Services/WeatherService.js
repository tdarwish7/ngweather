(function(){
  angular.module('ngWeather')
        .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){

      var passphrase = 'vegan all the way'
      var baseUrl = 'https://thawing-fortress-55215.herokuapp.com/';
      var service = {
        getHourlyData: getHourlyData,
        getMinutelyData: getMinutelyData,
        getDailyData: getDailyData,
        weather: {}
      };
      return service;

      function getHourlyData(lat, lon){
        var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
        console.log("Hourly: ",service.weather);
        var config= {
          headers:{
            'passphrase': passphrase
          }
        };
        return $http.get(url, config)
                    .then(function(response){
                      service.weather = response.data;
                      console.log("Hourly: ",service.weather);
                    });
      }


      function getMinutelyData(lat, lon){
        var url = baseUrl + 'forecast/minutely/' + lat + ',' + lon;
        console.log("Minutely: ", service.weather);
        var config = {
          headers:{
            'passphrase': passphrase
          }
        };
        return $http.get(url, config)
                    .then(function(response){
                      service.weather = response.data;
                      console.log("Minutely: ", service.weather);
                    });
      }

      function getDailyData(lat, lon){
        var url = baseUrl + 'forecast/daily/' + lat + ',' + lon;
        console.log("Daily: ", service.weather);
        var config = {
          headers:{
            'passphrase': passphrase
          }
        };
        return $http.get(url, config)
                    .then(function(response){
                      service.weather = response.data;
                      console.log("Daily: ", service.weather);
                    });
      }

   }
})();
