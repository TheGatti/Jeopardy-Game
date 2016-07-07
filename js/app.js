let app = angular.module('Schuck it, Trebek', ['ngRoute']);

// Controllers
require('./controllers/thecontroller')(app);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
          controller: 'logincontroller',
          templateUrl: 'templates/login.html',
        })
        .when('/game', {
            controller: 'thecontroller',
            templateUrl: 'templates/game.html',
        })
        .when('/gameover', {
            controller: 'overcontroller',
            templateUrl: 'templates/gameover.html',
        });
}]);
