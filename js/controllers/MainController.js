app.controller('MainController', ['$scope', function($scope){
		$scope.b45s = {
			name: 'Freelance - The B45s',
			startDate: new Date(2016, 04, 21),
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Fort Wayne rock band, the B45s.',
			skillsUsed: 'HTML, CSS, Bootstrap',
			link: 'http://theb45s.com',
			img: 'images/Projects/b45slogo.svg'
		};
		$scope.execuwell = {
			name: 'Freelance - Execuwell',
			startDate: new Date(2017, 02, 01),
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Indianapolis-area wellness consultancy, Execuwell.',
			skillsUsed: 'HTML, CSS, Javascript, JQuery, Bootstrap',
			link: 'http://execuwell.com',
			img: 'images/Projects/execuwellLogo.png'
		};
		$scope.footerIcons = [
		{
			name: 'twitter',
			iFrame: 'fa fa-twitter',
			link: 'https://twitter.com/jrt1025'
		},
		{
			name: 'linkedIn',
			iFrame: 'fa fa-linkedin-square',
			link: 'https://www.linkedin.com/in/james-tarr-34849197/'
		},
		{
			name: 'github',
			iFrame: 'fa fa-github',
			link: 'https://github.com/jrtarr'
		}
		]
	}]);