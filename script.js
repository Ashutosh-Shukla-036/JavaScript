function showApplication() {
    var selectedApp = document.getElementById("app-dropdown").value;
    var apps = document.getElementsByClassName("application");
    for (var i = 0; i < apps.length; i++) {
        apps[i].style.display = "none";
    }
    if (selectedApp) {
        document.getElementById(selectedApp).style.display = "block";
    }
}

function tempConverter() {
    var number = document.getElementById('number').value;
    var toFahrenheit = document.getElementById('toFahrenheit').checked;
    var toCelsius = document.getElementById('toCelsius').checked;
    var result = '';

    if (toFahrenheit) {
        result = (number * 9/5) + 32 + ' °F';
    } else if (toCelsius) {
        result = (number - 32) * 5/9 + ' °C';
    } else {
        result = 'Please select a conversion option.';
    }

    document.getElementById('result').innerText = result;
}
