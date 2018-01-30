$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.firstName="John";
	$scope.lastName="doe";
});

