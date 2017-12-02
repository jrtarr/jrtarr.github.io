app.controller('MainController', ['$scope', function($scope){
		$scope.displayCat = 'webdev';
		var date = new Date();
		date = date.toString();
		$scope.projects = [
		{
			category: 'webdev',
			name: 'The B45s',
			startDate: 'Dec, 2015',
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Fort Wayne rock band, the B45s.',
			skillsUsed: 'HTML, CSS, Bootstrap',
			link: 'http://theb45s.com',
			img: 'images/Projects/Web/b45slogo.svg'
		},
		{
			category: 'webdev',
			name: 'Execuwell',
			startDate: 'Sept, 2016',
			endDate: 'Ongoing',
			description: 'Designed, created, and maintained website for Indianapolis-area wellness consultancy, Execuwell.',
			skillsUsed: 'HTML, CSS, Javascript, JQuery, Bootstrap',
			link: 'http://execuwell.com',
			img: 'images/Projects/Web/execuwellLogo.png'
		},
		{
			category: 'webdev',
			name: 'FlexAble',
			startDate: 'March, 2017',
			endDate: 'May 2017',
			description: 'Developed app idea from problem identification up to functional wireframing to practice understanding user needs, idea formulation techniques, and basic UX principles.',
			skillsUsed: 'Affinity Diagramming, Persona/Scenario Building, Sketching, UX Design, Balsamiq wireframing, HTML, CSS, Javascript, User/Usability Testing',
			link: 'FlexAble.html',
			img: 'images/Projects/Web/FlexAbleLogo-01.png'
		},
		{
			category: 'webdev',
			name: 'South Side Alumni Association',
			startDate: 'July, 2017',
			endDate: 'Ongoing',
			description: 'Designed complete site overhaul of Fort Wayne South Side High School\'s alumni association. Built site using Wordpress to give board members access and control over site content.',
			skillsUsed: 'Wordpress, CSS, Javascript',
			link: 'http://archersalumni.com',
			img: 'images/Projects/Web/logoClean-01.png'
		},
		{
			category: 'webdev',
			name: 'JumboCapture - jumboDev',
			startDate: 'August, 2017',
			endDate: 'December, 2017',
			description: 'Worked on team to develop backend logic for the application JumboCapture. Modified Python libraries to upload split video clips to a file server and add SQL content to a database. Also set up and managed web server for said app\'s Django interface through DigitalOcean.',
			skillsUsed: 'Python, Django, MySQL, Linux (Ubuntu), DigitalOcean',
			link: 'https://jumbodev.github.io/jumboDev/#home',
			img: 'images/Projects/Web/jumboDev.svg'
		},
		{
			category: 'graphics',
			name: 'Spaceship Earth',
			startDate: 'April, 2015',
			endDate: 'April, 2015',
			description: 'Created line art in Illustrator based on photograph of Disney Epcot\'s Spaceship Earth, colored in Photoshop',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'images/Projects/GraphicDesign/SpaceshipEarth.png',
			img: 'images/Projects/GraphicDesign/SpaceshipEarth.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo Debut Poster',
			startDate: 'May, 2016',
			endDate: 'May, 2016',
			description: 'Commissioned to create poster for Fort Wayne band My Apollo\'s debut performance.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'images/Projects/GraphicDesign/StarBack.png',
			img: 'images/Projects/GraphicDesign/StarBack.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo @ CS3 Poster',
			startDate: 'Aug, 2016',
			endDate: 'Aug, 2016',
			description: 'Commissioned to create poster for Fort Wayne band My Apollo.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'images/Projects/GraphicDesign/PopArt.png',
			img: 'images/Projects/GraphicDesign/PopArt.png'
		},
		{
			category: 'graphics',
			name: 'My Apollo Middlewaves Poster',
			startDate: 'June, 2017',
			endDate: 'June, 2017',
			description: 'Designed poster for My Apollo\'s first festival performance at the upcoming Middlewaves Music Festival.',
			skillsUsed: 'Adobe Illustrator, Adobe Photoshop',
			link: 'images/Projects/GraphicDesign/MAMiddlewaves.png',
			img: 'images/Projects/GraphicDesign/MAMiddlewaves.png'
		},
		{
			category: 'cad',
			name: 'CATIA - Trumpet',
			startDate: 'Oct, 2015',
			endDate: 'Dec, 2015',
			description: 'Created part and assembly models for a Trumpet in CATIA',
			skillsUsed: 'Dassault CATIA v5',
			link: 'images/Projects/CAD/TrumpetFinal.png',
			img: 'images/Projects/CAD/TrumpetFinal.png'
		},
		{
			category: 'cad',
			name: 'NX Bank Vault',
			startDate: 'March 2016',
			endDate: 'March 2016',
			description: 'Created part and assembly models for a Bank Vault Door mechanism in NX',
			skillsUsed: 'Seimens NX 9',
			link: 'images/Projects/CAD/BankVaultFinal.png',
			img: 'images/Projects/CAD/BankVaultFinal.png'
		},
		{
			category: 'cad',
			name: 'CATIA - Roller',
			startDate: 'March, 2017',
			endDate: 'May, 2017',
			description: 'Created part and assembly models based on given engineering drawings, complete with GD&T.',
			skillsUsed: 'Dassault CATIA v5',
			link: 'images/Projects/CAD/RollerFinal.png',
			img: 'images/Projects/CAD/RollerFinal.png'
		},
		{
			category: 'cad',
			name: 'NX Engine',
			startDate: 'April 2017',
			endDate: 'April 2017',
			description: 'Created part and assembly models for a simple engine block in NX, complete with GD&T. Also tested importing and exporting neutral file formats on this file.',
			skillsUsed: 'Seimens NX 9',
			link: 'images/Projects/CAD/EngineFinal.png',
			img: 'images/Projects/CAD/EngineFinal.png'
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
		},
		{
			name: 'deviantArt',
			iFrame: 'fa fa-deviantart',
			link: 'https://jrt1025.deviantart.com'
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
			var navEl = document.getElementById('navCollapser');
			var navBar = document.getElementById('projNav');
			if(newCat == "web"){
				$scope.displayCat =	"webdev";
				navEl.classList.remove("animated");
				navBar.classList.remove("animated");
			} 
			else if(newCat == "cad"){
				$scope.displayCat = "cad";
				navEl.classList.remove("animated");
				navBar.classList.remove("animated");
			}
			else if(newCat == "gd"){
				$scope.displayCat = "graphics";
				navEl.classList.remove("animated");
				navBar.classList.remove("animated");
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
				window.location.href = $scope.projects[index].link;
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

