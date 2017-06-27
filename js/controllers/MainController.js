app.controller('MainController', ['$scope', function($scope){
		$scope.displayCat = 'webdev';
		var date = new Date();
		date = date.toString();
		console.log(date);
		console.log(new Date(2017, 02, 01));
		$scope.projects = [
		{
			category: 'webdev',
			name: 'The B45s',
			startDate: new Date(2016, 04, 21),
			endDate: new Date(),
			description: 'Designed, created, and maintained website for Fort Wayne rock band, the B45s.',
			skillsUsed: 'HTML, CSS, Bootstrap',
			link: 'http://theb45s.com',
			img: 'images/Projects/Web/b45slogo.svg'
		},
		{
			category: 'webdev',
			name: 'Execuwell',
			startDate: new Date(2017, 02, 01),
			endDate: new Date(),
			description: 'Designed, created, and maintained website for Indianapolis-area wellness consultancy, Execuwell.',
			skillsUsed: 'HTML, CSS, Javascript, JQuery, Bootstrap',
			link: 'http://execuwell.com',
			img: 'images/Projects/Web/execuwellLogo.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo Debut Poster',
			startDate: new Date(2016, 05, 15),
			endDate: new Date(2016, 05, 17),
			description: 'Commissioned to create poster for Fort Wayne band My Apollo\'s debut performance.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'https://www.facebook.com/myapolloofficial/photos/a.1785673638331860.1073741829.1781663952066162/1785672838331940/?type=3&theater',
			img: 'images/Projects/GraphicDesign/StarBack.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo @ CS3 Poster',
			startDate: new Date(2016, 08, 11),
			endDate: new Date(2016, 08, 14),
			description: 'Commissioned to create poster for Fort Wayne band My Apollo.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'https://www.facebook.com/myapolloofficial/photos/a.1781664765399414.1073741827.1781663952066162/1822640307968526/?type=3&theater',
			img: 'images/Projects/GraphicDesign/PopArt.png'
		},
		{
			category: 'cad',
			name: 'PLACEHOLDER CATIA PROJECT',
			startDate: new Date(2016, 08, 15),
			endDate: new Date(2016, 09, 17),
			description: 'Make a fake CAD project in CATIA to prove this space works',
			skillsUsed: 'Dassault CATIA v24',
			link: '#',
			img: 'images/Projects/CAD/PlaceholderCATIA.gif'
		},
		{
			category: 'cad',
			name: 'PLACEHOLDER NX PROJECT',
			startDate: new Date(2016, 010, 11),
			endDate: new Date(2016, 11, 14),
			description: 'I made a fake project in NX9 to prove this space loads properly. Hopefully a real one appears soon.',
			skillsUsed: 'NX9',
			link: '#',
			img: 'images/Projects/CAD/PlaceholderNX.jpg'
		}
		];


		$scope.footerIcons = [
		{
			name: 'twitter',
			iFrame: 'fa fa-twitter',
			link: 'https://twitter.com/jrt1025'
		},
		{
			name: 'instagram',
			iFrame: 'fa fa-instagram',
			link: 'https://instagram.com/jrt1025'
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
		];

		$scope.setShow = function(index){
			//document.getElementById('projContainer').innerHTML = "<proj-info proj='execuwell'></proj-info>";
			//$scope.$digest();
			if($scope.displayCat == $scope.projects[index].category){
				return true;
			}
		};

		$scope.catSwap = function(newCat){
			if(newCat == "web"){
				$scope.displayCat =	"webdev";
			} 
			else if(newCat == "cad"){
				$scope.displayCat = "cad";
			}
			else if(newCat == "gd"){
				$scope.displayCat = "graphics";
			}
		};

		$scope.$watch
	}]);