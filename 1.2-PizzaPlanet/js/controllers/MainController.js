app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.appetizers = [{
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
  	}, {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    }, {
    	name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }],
  $scope.mains = [{
    name:'Meat Lovers',
    description: 'Bacon, ham, pepperoni, sausage',
    price: 10
  }, {
    name: 'Hawaiian',
    description: 'Pineapples, ham',
    price: 8
  }, {
    name: 'Pepperoni',
    description: 'Pepperoni',
    price: 8
  }];
  $scope.extras = [{
    name:'Cheesy Breadsticks',
    description: 'Breadsticks baked with cheese',
    price: 5
  }, {
    name: 'Honey BBQ wings',
    description: 'Boneless chicken fried and topped with honey BBQ sauce',
    price: 5
  }, {
    name: 'Baked Ziti',
    description: 'Ziti, marinara, sausage',
    price: 5
  }];
}]);