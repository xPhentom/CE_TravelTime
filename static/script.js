var app = angular.module("homeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/start.html",
            controller: "startCtrl"
        })
})

app.controller('startCtrl', ['$scope', function ($scope) {
    var map = new L.Map('mapid', {
        center: new L.LatLng(51.51, -0.11),
        zoom: 9
    });
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);

    var stepSlider = document.getElementById('TimeSlider');

    noUiSlider.create(stepSlider, {
        start: [25],
        step: 5,
        range: {
            'min': [25],
            'max': [60]
        }
    });

    var stepSliderValueElement = document.getElementById('TimeSliderValue');

    stepSlider.noUiSlider.on('update', function (values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });

}])