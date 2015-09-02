app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [{
    icon: 'http://lawlietblack.com/img/kerbal.png',
    title: 'Kerbal',
    developer: 'Squad',
    price: 10
  }, {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  }, {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  }, {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  }];
}]);