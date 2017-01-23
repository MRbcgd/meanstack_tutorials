var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName,
  ['ngRoute','example']);

//해쉬뱅
mainApplicationModule.config(['$locationProvider',               //추가
    function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);                                                             //추가 끝

angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
});
