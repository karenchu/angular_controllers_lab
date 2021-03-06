var HangmanCtrl = function($scope) {
    $scope.currentWord = "morning";
    $scope.guessedChars = [];
    $scope.guessedStyle = {color: "green"};
    $scope.wrongStyle = {color: "red"};

    $scope.addWord = function(){
        $scope.currentWord = $scope.newWord;
        $scope.guessedChars = [];
        $scope.newWord = "";
    };

    $scope.showChars = function(){
      var chars = $scope.currentWord.split("");

      chars.forEach(function(val, index){
        if($scope.guessedChars.indexOf(val) === -1){
           chars[index] = "_";
         }
      });
      return chars;
    };

    $scope.addGuess = function(){
       if($scope.guessedChars.indexOf($scope.guess) === -1){
          $scope.guessedChars.push($scope.guess);
       }
       $scope.guess = "";
    };

    $scope.isGuessed = function() {
        var chars = $scope.currentWord.split("");
        return chars.indexOf(this.guessedChar) !== -1? $scope.guessedStyle : $scope.wrongStyle;
    };
};