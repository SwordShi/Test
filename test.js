<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
</head>
<body>
<div ng-app="myApp" ng-controller="myCtrl">

<input type="number" ng-model="num"/>

<h1>16���ƣ�{{hex}}</h1>

</div>

<p>�Զ����������ת��16��������</p>

<script>
/*var app = angular.module('myApp', []);

app.service('hexafy', function() {
	this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});*/

//�Զ�����������н���ת��
var model = angular.module('myApp',[]);
model.service('hexafy', function(){
	//�����µķ���
	this.myfunction = function(x){
		return x.toString(16);
	};
});

model.controller('myCtrl',function($scope , hexafy){
	$scope.num = 15;
	$scope.$watch('num',function(data){
	  $scope.hex = hexafy.myfunction(data);
	});
	
});
	
</script>

</body>
</html>
