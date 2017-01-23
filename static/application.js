//bower 설치후에 mean이라는 모듈에 속하는 모듈들을 angularjs로 다루기위해사용
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, []);

angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
});
