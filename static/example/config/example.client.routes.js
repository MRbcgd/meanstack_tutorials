angular.module('example').config(['$routeProvider'
    ,function($routeProvider) {
    $routeProvider.
    //로컬에 접속시 ng-view 지시자에 의해 example 컨틀로러를 보여줄것
    when('/',{
        templateUrl : 'example/views/example.client.view.html'
    }).
    otherwise({
        redirectTo : '/'
    });
}
]);
