var app = angular.module("homeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    //Return index template
        .when("/", {
        templateUrl: "/start.html",
        controller: "startCtrl"
    })
})



//Indexcontroller
app.controller('startCtrl', ['$scope', function ($scope, $http) {

    //Create map, can be found back on leaflet website
    var map = new L.Map('mapid', {
        center: new L.LatLng(51.51, -0.11),
        zoom: 9
    });
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);
    

    //Create noUiSlider, doesn't come with materialize.css
    var stepSlider = document.getElementById('TimeSlider');

    noUiSlider.create(stepSlider, {
        start: [25],
        step: 5,
        range: {
            'min': [25],
            'max': [60]
        }
    });
    //Get value from Slider
    var stepSliderValueElement = document.getElementById('TimeSliderValue');

    stepSlider.noUiSlider.on('update', function (values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });

    $scope.MapClick = function(e){

        var search = (e.latlng.lat + ", " + e.latlng.lng);

        $http({
            method: "POST",
            url: "http://nominatim.openstreetmap.org/search?q=" + search + "&format=json&polygon=0&addressdetails=1&extratags=1",
        }).then(function mySuccess(response){

        }), function myError(response){}
    }

}])