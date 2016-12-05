<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
</head>
<body>
<div ng-app="myApp" ng-controller="myCtrl">

<input type="number" ng-model="num"/>

<h1>16进制：{{hex}}</h1>

</div>

<p>自定义服务，用于转换16进制数：</p>

<script>
/*无输入框，仅显示
var app = angular.module('myApp', []);

app.service('hexafy', function() {
	this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});*/

//测试是否会冲突

//自定义服务，来进行进制转换
var model = angular.module('myApp',[]);
model.service('hexafy', function(){
	//服务下的方法
	this.myfunction = function(x){
		return x.toString(16);
	};
});

model.controller('myCtrl',function($scope , hexafy){
	$scope.num = 15;
	//使用$watch来监听，input的值	
 	$scope.$watch('num',function(data){
	  $scope.hex = hexafy.myfunction(data);
	});
	
});
	
</script>
//asdfasdfadsfasdfasd
</body>
</html>
