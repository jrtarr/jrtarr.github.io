app.controller('MainController', ['$scope', function($scope){
		$scope.b45s = {
			name: 'Website - The B45s',
			startDate: new Date(2016, 04, 21),
			endDate: 'Ongoing',
			description: 'Designed and maintained website for Fort Wayne rock band, the B45s.',
			skillsUsed: 'HTML, CSS, Bootstrap',
			link: 'http://theb45s.com',
			img: 'images/Projects/b45slogo.svg'
		};
		$scope.execuwell = {
			name: 'Website - Execuwell',
			startDate: new Date(2017, 02, 01),
			endDate: 'Ongoing',
			description: 'Designed and maintained website for Indianapolis-area wellness consultancy, Execuwell.',
			skillsUsed: 'HTML, CSS, Javascript, JQuery, Bootstrap',
			link: 'http://execuwell.com',
			img: 'images/Projects/execuwellLogo.png'
		};
	}]);