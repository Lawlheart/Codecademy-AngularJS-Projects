app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Hello_World';
	$scope.promo = 'The cake is a lie';
	$scope.products = [{
			name: 'The Book of Trees',
			price: 19,
			pubdate: new Date('2014','03','08'),
			cover: 'img/the-book-of-trees.jpg',
			likes: 0,
			dislikes: 0
		}, {
			name: 'Program or be Programmed',
			price: 8,
			pubdate: new Date('2013', '08', '01'),
			cover: 'img/program-or-be-programmed.jpg',
			likes: 0,
			dislikes: 0
		}, {
			name: 'The Ultimate Hitchhiker\'s guide to the Galaxy',
			price:12,
			pubdate: new Date('2010', '09','29'),
			cover:'http://cache.coverbrowser.com/image/douglas-adams-books/14-9.jpg',
			likes: 0,
			dislikes: 0
		}, {
			name:'The Name of the Wind',
			price:5,
			pubdate: new Date('2007','03','27'),
			cover:'http://www.patrickrothfuss.com/images/page/cover_277.jpg',
			likes: 0,
			dislikes: 0
	}]
	$scope.plusOne = function(index) {
		$scope.products[index].likes +=1
	};
	$scope.minusOne = function(index) {
		$scope.products[index].dislikes +=1
	};
}]);