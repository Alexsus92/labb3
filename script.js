var date = new Date();

function age(ssn) {
	var arNu = date.getFullYear();
	var manadNu = date.getMonth() + 1;
	var dagNu = date.getDate();
	var arssn;

	if(ssn.slice(0,2) < 50) {
		arssn = 20 + ssn.slice(0,2);
	} else {
		arssn = 19 + ssn.slice(0,2);
	}
	var manadssn = ssn.slice(2,4);
	var dagssn = ssn.slice(4,6); 

	if (arNu < 10) {
		arNu = "0" + arNu;
	} else {
		arNu = "" + arNu;
	}

	if (manadNu < 10) {
		manadNu = "0" + manadNu;
	} else {
		manadNu = "" + manadNu;
	}

	if (dagNu < 10) {
		dagNu = "0" + dagNu;
	} else {
		dagNu ="" + dagNu;
	}

	var x = arNu - arssn;

	if (manadssn > manadNu) {
		x--;
	} else if (manadssn === manadNu && dagssn >= dagNu) {
		x--;
	}

	return x;
}

function birthday(ssn) {

	var manad = date.getMonth() + 1;
	var dag = date.getDate();
	var manadString;
	var dagString;

	if (dag < 10) {
		dagString = "0" + dag;
	} else {
		dagString = "" + dag;
	}

	if (manad < 10) {
		manadString = "0" + manad;
	} else {
		manadString = "" + manad;
	}
	alert(manadString);
	alert(ssn.slice(2, 4));
	alert(dagString);
	alert(ssn.slice(4, 6));
	return manadString === ssn.slice(2,4) && dagString === ssn.slice(4, 6);
}  

var app = angular.module('app', ['ui.router']);

app.controller('PersonalController', function ($stateParams, $scope){
	$scope.check = function() {
		$scope.age = age($scope.description);
	};
	

});

app.controller('YesNo', function ($scope) {
	$scope.check = function() {
		if ($scope.description) {
			$scope.birthday = birthday($scope.description);
		}
	};
});

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/personal");
	$stateProvider.state('personal', {
		controller: 'PersonalController', 
		templateUrl: 'partials/personal.html',
		url: '/personal'
	}).state('yesno', {
		controller: 'YesNo',
		templateUrl: 'partials/yesno.html',
		url: '/yesno'
	});
});