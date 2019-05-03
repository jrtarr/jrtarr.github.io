//Home of Content to be Loaded
export default content =  {
    textContent: {
        aboutMe: ['I\'m a Purdue University graduate with a triple major in Computer Graphics Technology, Web Development and Design, and Virtual Product Integration. My passion for web and graphic design spans broadly from creating both raster and vector graphics, to creating functional and aesthetically pleasing websites, and even creating CAD products using CATIA and NX9.','<br/>I\'ve worked on a wide variety projects including site design, web app support, and graphic design. I\'ve interned with <a href="https://www.textron.com/">Textron Inc.</a> in their IT leadership development program working on backend web development, and most recently worked at <a href="https://www.epic.com/">Epic Systems</a> to support MyChart - a .NET based web application that patients use to view their medical information.','Feel free to check out my resume below to learn more about my professional credentials!','<div id="resume-button"><a href="JTarrResume.pdf">My Resume</a></div>']
    },
    projects: {
        web: [
            {
                name: 'Hangman',
                skills: 'Javascript, HTML, CSS',
                url: 'https://jtarr-hangman.netlify.com/',
                description: 'Hangman game built in Javascript using Andrew Mead\'s puzzle generator API to retrieve puzzles.',
                iconPath: 'img/projects/Hangman.png'
            },
            {
                name: 'Notes App',
                skills: 'Javascript, HTML, CSS',
                url: 'https://jrtarr-notes-app.netlify.com/',
                description: 'Simple note-taking application built using Javascript. Stores notes to local storage.',
                iconPath: 'img/projects/Notes.png'
            },
            {
                name: 'ToDo App',
                skills: 'Javascript, HTML, CSS',
                url: 'https://jtarr-todos.netlify.com/',
                description: 'Javascript application that stores list of To-Dos to local storage.',
                iconPath: 'img/projects/ToDo.png'
            },,
            {
                name: 'Archers Alumni',
                skills: 'Wordpress, HTML, CSS',
                url: 'http://archersalumni.com',
                description: 'Designed site overhaul of Fort Wayne\'s South Side High School alumni association. Built site using Wordpress to give board members easy access to post content.',
                iconPath: 'img/projects/sshs.png'
            },
            {
                name: 'Execuwell/Excellwell',
                skills: 'Javascript, jQuery, HTML, CSS',
                url: 'https://execuwell.com',
                description: 'Designed, created, and maintain website for Indianapolis-area wellness consultancy, Execuwell.',
                iconPath: 'img/projects/execuwell.png'
            },
            {
                name: 'Farrow Records',
                skills: 'Javascript, HTML, CSS, AngularJS',
                url: '#',
                description: 'Mock website for a record label built primarily using HTML, CSS, and a little bit of AngularJS. Featuring my own personal band along with some friends!',
                iconPath: 'img/projects/Farrow.png'
            }
        ],
        graphic: [
            {
                name: 'The Outliers - Nashville',
                description: 'Logo and merch designs for Nasvhille band The Outliers..',
                imagePath: 'img/projects/theOutliers.png'
            },
            {
                name: 'Spuly G',
                description: 'Album art and logo designs for Fort Wayne musician Spuly G.',
                imagePath: 'img/projects/spulyG.png'
            },
            {
                name: 'My Apollo',
                description: 'Poster designs for Fort Wayne band My Apollo.',
                imagePath: 'img/projects/myApollo.png'
            },
            {
                name: 'Turbulence eSports',
                description: 'Logo design for California-based eSports team Turbulence.',
                imagePath: 'img/projects/turbulence.png'
            }
        ]
    },
    social: [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/jamestarrdesign/',
            iconClass: ['fab','fa-instagram']
        },
        {
            name: 'Github',
            url: 'https://github.com/jrtarr',
            iconClass: ['fab','fa-github']

        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/james-tarr-34849197/',
            iconClass: ['fab','fa-linkedin-in']
        }
    ]
}