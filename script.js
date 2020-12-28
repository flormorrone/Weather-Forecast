$(document).ready(function() {

    $("#searchInput").on("keyup", function(e) {
        var cityName = e.target.value; // let solo funciona dentro de la funcion
        const APIKey = "8d1647aab8c8e0fb012895f2cff4c66c";

        //make a request to server

        $.ajax({

            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`,


        }).done(function(weatherData) {

            $("#profile").html(`
            <div class= "container" style="padding-left: 35%; padding-top: 2%; padding-bottom: 2%">
                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Weather: ${weatherData.weather[0].description}</h5>
                            <p class="card-text">The temperature at ${cityName} is ${weatherData.main.temp} &#8451 and it feels like ${weatherData.main.feels_like} &#8451.</p>
                            <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Learn more about ${cityName}.</a>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    });

});