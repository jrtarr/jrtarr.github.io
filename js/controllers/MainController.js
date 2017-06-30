app.controller('MainController', ['$scope', function($scope){
		$scope.displayCat = 'webdev';
		var date = new Date();
		date = date.toString();
		$scope.projects = [
		{
			category: 'webdev',
			name: 'The B45s',
			startDate: 'Dec 2015',
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Fort Wayne rock band, the B45s.',
			skillsUsed: 'HTML, CSS, Bootstrap',
			link: 'http://theb45s.com',
			img: 'images/Projects/Web/b45slogo.svg'
		},
		{
			category: 'webdev',
			name: 'Execuwell',
			startDate: 'Jan 2016',
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Indianapolis-area wellness consultancy, Execuwell.',
			skillsUsed: 'HTML, CSS, Javascript, JQuery, Bootstrap',
			link: 'http://execuwell.com',
			img: 'images/Projects/Web/execuwellLogo.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo Debut Poster',
			startDate: 'May 14, 2016',
			endDate: 'May 17, 2016',
			description: 'Commissioned to create poster for Fort Wayne band My Apollo\'s debut performance.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'https://www.facebook.com/myapolloofficial/photos/a.1785673638331860.1073741829.1781663952066162/1785672838331940/?type=3&theater',
			img: 'images/Projects/GraphicDesign/StarBack.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo @ CS3 Poster',
			startDate: 'Aug 11, 2016',
			endDate: 'Aug 14, 2016',
			description: 'Commissioned to create poster for Fort Wayne band My Apollo.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'https://www.facebook.com/myapolloofficial/photos/a.1781664765399414.1073741827.1781663952066162/1822640307968526/?type=3&theater',
			img: 'images/Projects/GraphicDesign/PopArt.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo Middlewaves Poster',
			startDate: 'June 26, 2017',
			endDate: 'June 27, 2017',
			description: 'Designed poster for My Apollo\'s first festival performance at the upcoming Middlewaves Music Festival.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: '#',
			img: 'images/Projects/GraphicDesign/MAMiddlewaves.png'
		},
		{
			category: 'cad',
			name: 'PLACEHOLDER CATIA PROJECT',
			startDate: 'Dec 31, 2016',
			endDate: 'Dec 34, 2016',
			description: 'Make a fake CAD project in CATIA to prove this space works',
			skillsUsed: 'Dassault CATIA v24',
			link: '#',
			img: 'images/Projects/CAD/PlaceholderCATIA.gif'
		},
		{
			category: 'cad',
			name: 'PLACEHOLDER NX PROJECT',
			startDate: 'Dec 31, 2016',
			endDate: 'Dec 34, 2016',
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
		/*--------------Functions--------------*/
		$scope.dateFilter = function(index){
			if($scope.projects[index].endDate == "Ongoing"){
				return "Ongoing";
			}
			else{
				console.log($scope.projects[index].endDate);
				//return $scope.projects[index].endDate.prototype.toDateString();
			}
		};

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

		$scope.picClass = function(index){
			if($scope.projects[index].category == "webdev"){
				return "projPic webPic";
			}
			else if($scope.projects[index].category == "cad"){
				return "projPic cadPic";
			}
			else{
				return "projPic gdPic";
			}
		}

		$scope.modalExpand = function(index){
			var pic = $scope.projects[index];

			modal.style.display = "block";
			modalImg.src = pic.img;
			captionText.innerHTML = pic.description;
		}

		$scope.linkChecker = function(index){
			if($scope.projects[index].category == "webdev"){
				return "Click Here to View";
			}
			else if($scope.projects[index].category == "cad" | $scope.projects[index].category == "graphics"){
				return "Click Here to See Full Image";
			}
		};

		$scope.linkFilter = function(index){
			if($scope.projects[index].category == "webdev"){
				window.location.href = $scope.projects[index].link;
			}
			else{
				$scope.modalExpand(index);
			}
		}

		$scope.animate = function(){
			var navEl = document.getElementById('navCollapser');
			var navBar = document.getElementById('projNav');
			if(!navEl.classList.contains("animated")){
				navEl.classList.add("animated");
				navBar.classList.add("animated");
			}
			else{
				navEl.classList.remove("animated");
				navBar.classList.remove("animated");
			}
			//var navEl = document.getElementById('navCollapser');

		};
	}]);

