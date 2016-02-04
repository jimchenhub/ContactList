var app = angular.module('ContactListApp', []);

app.controller('AppController', ['$scope', '$http', function($scope, $http){
    
    var refresh = function(){
        $http.get("/contactlist").success(function(response){
            console.log("Got the data from server");
            $scope.contactList = response;
        });
    };

    refresh();

    // add contact
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post("/contactlist", $scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
    };

    // remove contact
    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactList/' + id).success(function(response){
            refresh();
        });
    };

    // edit contact
    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/' + id).success(function(response){
            $scope.contact = response;
        });
    };

    // update contact
    $scope.update = function(){
        console.log($scope.contact);
        $http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response){
            $scope.contact = null;
            refresh();
        });
    }

}]);

