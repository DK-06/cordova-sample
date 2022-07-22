var cartModule = angular.module('MyApp');

cartModule.controller(
    'cartController', function($scope, $location) {
        $scope.cartList = [
            {
                'id': '1',
                'title': 'Accusamus beatae',
                'url': 'https://via.placeholder.com/600/92c952',
                'price': '400',
                'quantity': 1
            },
            {
                'id': '2',
                'title': 'Reprehenderit est',
                'url': 'https://via.placeholder.com/600/771796',
                'price': '500',
                'quantity': 1
            },
            {
                'id': '3',
                'title': 'Officia porro',
                'url': 'https://via.placeholder.com/600/24f355',
                'price': '300',
                'quantity': 1
            },
            {
                'id': '4',
                'title': 'Culpa odio',
                'url': 'https://via.placeholder.com/600/d32776',
                'price': '600',
                'quantity': 1
            }
        ];

        $scope.removeProduct = function(product) {
            var index = $scope.cartList.indexOf(product);
            $scope.cartList.splice(index, 1);
        }

        $scope.addQuantity = function(product) {
            if(product.quantity < 10) {
                var index = $scope.cartList.indexOf(product);
                $scope.cartList[index].quantity = product.quantity + 1;
            }
        }

        $scope.removeQuantity = function(product) {
            if(product.quantity > 1) {
                var index = $scope.cartList.indexOf(product);
                $scope.cartList[index].quantity = product.quantity - 1;
            }
        }

        $scope.goBack = function() {
            $location.path('/home');
        }
    }
)