$(document).ready(function() {
  
  var arr = [
    {
      country: "tunisia",
      weather: 13,
      humidity: 3,
      windspeed: 20,
     
       
    },
    {
      country: "libya",
      weather: 15,
      humidity: 24,
      windspeed: 34
    },
    {
      country: "germany",
      weather: 2,
      humidity: 12,
      windspeed: 8
    },
    {
      country: "france",
      weather: 0,
      humidity: 2,
      windspeed: 23
    },
    {
      country: "usa",
      weather: 20,
      humidity: 4,
      windspeed: 6
    },
    {
      country: "canada",
      weather: -1,
      humidity: 0,
      windspeed: 29
    }
  ];

  
  function updateWeatherDetails() {
    var cityName = $("#cv").val().toLowerCase();
    var selectedObject = arr.find(function(obj) {
      return obj.country.toLowerCase() === cityName;
    });

    if (selectedObject) {
      $(".city").text(selectedObject.country);
      $(".temp").text(selectedObject.weather + "°c");
      $(".humidity").text(selectedObject.humidity + "%");
      $(".wind").text(selectedObject.windspeed + " KM/h");
    } else {
      $(".city").text("City Not Found");
      $(".temp").text("");
      $(".humidity").text("");
      $(".wind").text("");
    }
  }

  
  $("#btn").click(function() {
    updateWeatherDetails();
  });

  
  $("#cv").keypress(function(event) {
    if (event.which === 13) {
      updateWeatherDetails();
    }
  });
});
