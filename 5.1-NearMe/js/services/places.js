app.factory('places', ['$http', function ($http) {
	return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=45.5266995%7C-122.6795292&gslimit=60&format=json&callback=JSON_CALLBACK').success(function (data) {
		return data;
	}).error(function (err) {
		return err;
	});
}]);