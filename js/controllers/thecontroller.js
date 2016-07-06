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
