app.controller('MainController', ['$scope', 'places', function ($scope, places) {
	$scope.mapCenter = {
	  lat: 45.5266995,
	  lng: -122.6795292,
	  zoom: 16
	};
	places.success(function (data) {
		$scope.geodata = data;
		$scope.mapMarkers = geodataToMarkers($scope.geodata);
	});
}]);