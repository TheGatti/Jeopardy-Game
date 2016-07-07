(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(x) {
    x.controller('thecontroller', function($scope, $http) {

        $scope.questionHistory = [];
        $scope.correctAnswer = '';
        $scope.userAnswer = '';
        $scope.points = 0;

        $scope.theQuestion = {
            question: 'your question',
            answer: 'your answer',
            value: 0,
            category: "the category",
        };

        $scope.generateQuestion = function() {
            console.log('question me up');
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function(response) {
                console.log(response)
                $scope.theQuestion = response.data[0];
                $scope.questionHistory.push({
                    question: $scope.theQuestion.question
                });
            })
        };
        $scope.generateQuestion();

        $scope.checkAnswer = function() {
            console.log('Right or Wrong?');
            $scope.correctAnswer = $scope.theQuestion.answer
            if ($scope.userAnswer === $scope.theQuestion.answer) {
                console.log('GOT EM');
                let pointsUp = Number($scope.theQuestion.value + $scope.points)
                $scope.points = pointsUp
            } else {
                console.log('BOOOOOOOOO');
                let pointsDown = Number($scope.points - $scope.theQuestion.value)
                $scope.points = pointsDown
            }
        }
    });
};

},{}],2:[function(require,module,exports){
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

},{"./controllers/thecontroller":1}]},{},[2])