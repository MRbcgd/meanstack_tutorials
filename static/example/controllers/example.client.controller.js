// angular.module('example').controller('ExampleController',['$scope',
//   function($scope){
//     $scope.name='Mean Application'
//   }
// ]);
angular.module('example').controller('ExampleController', ['$scope',
    'Authentication',
    function($scope, Authentication) {
        $scope.name = Authentication.user ? Authentication.user.username : 'MEAN Application'
    }
]);
