// Defining angular app as 'app'
var app = angular.module('app', []);
// Define a controller, include important modules needed to communicate back and forth with the server.
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    // Define 1 cat, and list of cats, which will be used with ng-repeat later.
    $scope.cat = {};
    $scope.cats = [];

    // Goes and gets cat info from server & database and sets it equal to cats.
    var fetchCats = function() {
        // So we are sending a GET request to the API endpoint /cats
        return $http.get('/cats').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.cat = {};
            $scope.cats = response.data;
            return response.data;
        })
    };
    // Define the add cats function
    // .then runs fetchCats after add complete, thus updating our list of cats.
    $scope.add = function(cat){
        return $http.post('/add', cat).then(fetchCats);
    };
    // Run fetchCats right away when page is loaded in case cats exist in database already.
    fetchCats();
}]);
