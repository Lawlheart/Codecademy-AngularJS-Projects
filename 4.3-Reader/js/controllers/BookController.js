app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  // Your code here
  books.success(function(data) {
  	$scope.book = data[$routeParams.bookId]
  });
  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);
