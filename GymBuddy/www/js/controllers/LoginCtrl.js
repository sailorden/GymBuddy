rgymBuddyApp.controller('LogInCtrl', function($scope) {

  $scope.name = null;

  $scope.login = function(){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $scope.name = authData.facebook.displayName;
        console.log("Authenticated successfully with payload:", $scope.username);
      }
    });
  };

});