function GetTodayDate() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = monthArr[month];
    var weekday;
    var dayArr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var weekDate = d.getDay();
    while (weekDate > 7) {
        weekDate = weekDate - 7;
    }
    weekday = dayArr[weekDate];

    return weekday + ", " + date + " " + month + " " + year;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("weather").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    if (lat == "" || lat == null || lat == undefined) {
        lat = "30.680223899999998";
    }
    if (long == null || long == "" || long == undefined) {
        long = "76.83479489999999";
    }
    getWeather(lat, long);
}

function getWeather(lat, long) {
        $.ajax({
        type: "GET",
        url: "/Weather/GetWeather?latitude=" + lat.toString() + "&longitude=" + long.toString(),
        contentType: "application/json; charset=utf-8",
        aysnc: false,
        cache: false,
        success: function (response) {
            document.getElementById("weather").innerHTML = response.Temp;
            $('#wicon').attr('src', response.Icon);
        },

        error: function (response) {
            console.log(response.responseText);
        }


    });
}
