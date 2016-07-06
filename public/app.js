(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (x) {
    x.controller('thecontroller', function ($scope, $http) {
        $scope.questions = [
            { question: 'Are we there yet?' },
            { question: 'When is lunch?' },
            { question: 'How YOU doing?' },
        ];

        $scope.theQuestion = {
            question: 'Here is a question....',

        };

        $scope.question = function () {
            console.log('question me up');

            // Make an AJAX request and update the scope.
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function (response) {
                let theQuestion = response.data[0];
                $scope.theQuestion = theQuestion.question;

                $scope.questions.push({ question: theQuestion.question });
            });
        };

        // $scope.flip();
    });
};

},{}],2:[function(require,module,exports){
let app = angular.module('Schuck it, Trebek', []);

// Controllers
require('./controllers/thecontroller')(app);

},{"./controllers/thecontroller":1}]},{},[2])