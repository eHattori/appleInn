'use strict';

function mapCtrl($scope, COLORS) {

  var isInternetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  var markerUrl = (isInternetExplorer11) ? 'img/cd-icon-location.png' : 'img/cd-icon-location.svg';

  var mainColor = COLORS.dark,
    saturationValue = -20,
    brightnessValue = 5;

  var style = [
    {
      //set saturation for the labels on the map
      elementType: 'labels',
      stylers: [
        {
          saturation: saturationValue
                }
            ]
        },
    { //poi stands for point of interest - don't show these lables on the map
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
                }
            ]
        },
    {
      //don't show highways lables on the map
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
                }
            ]
        },
    {
      //don't show local road lables on the map
      featureType: 'road.local',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
                }
            ]
        },
    {
      //don't show arterial road lables on the map
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
                }
            ]
        },
    {
      //don't show road lables on the map
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'off'
                }
            ]
        },
        //style different elements on the map
    {
      featureType: 'transit',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'poi.government',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'poi.sport_complex',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'poi.business',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'transit',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'transit.station',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'landscape',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]

        },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          hue: mainColor
                },
        {
          visibility: 'on'
                },
        {
          lightness: brightnessValue
                },
        {
          saturation: saturationValue
                }
            ]
        }
    ];


  $scope.myMarkers = [];

  $scope.mapOptions = {
    scrollwheel: false,
    center: new google.maps.LatLng(35.784, -78.670),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: style
  };

  $scope.addMarker = function ($event, $params) {
    $scope.myMarkers.push(new google.maps.Marker({
      map: $scope.myMap,
      position: $params[0].latLng,
      icon: markerUrl
    }));
  };

  $scope.setZoomMessage = function (zoom) {
    $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
    console.log(zoom, 'zoomed');
  };

  $scope.openMarkerInfo = function (marker) {
    $scope.currentMarker = marker;
    $scope.currentMarkerLat = marker.getPosition().lat();
    $scope.currentMarkerLng = marker.getPosition().lng();
    $scope.myInfoWindow.open($scope.myMap, marker);
  };

  $scope.setMarkerPosition = function (marker, lat, lng) {
    marker.setPosition(new google.maps.LatLng(lat, lng));
  };
}

angular
  .module('urbanApp')
  .controller('mapCtrl', ['$scope', 'COLORS', mapCtrl]);
