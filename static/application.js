var mainApplicationModuleName = 'mean';

//ngRoute를 통해 ng-include를 매번사용하지 않고 ng-view를 통해 템플릿 사용
var mainApplicationModule = angular.module(mainApplicationModuleName,
  ['ngRoute','users','example']);

//해쉬뱅, 제대로 접속시 뒤에 #!를 추가한다.
mainApplicationModule.config(['$locationProvider',               //추가
    function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

//facebook 같이 OAuth접속시 생기는 #_=_ 문제 해결위해
if(window.location.hash === '#_=_') window.location.hash = '#!';   // 추가

angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
});
