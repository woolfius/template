app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "../components/main.html"
        , controller: 'myCtrl'
        , controllerAs: 'my'
    }).when('/someURL', {
        templateUrl: "../components/someURL.html"
        , controller: 'myCtrl'
        , controllerAs: 'my'
    })
        //put your URLs here
        .otherwise({
        redirectTo: '/'
    })

});