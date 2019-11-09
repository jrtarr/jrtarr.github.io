//Home of Content to be Loaded
const content =  {
    textContent: {
        aboutMe: ['I\'m a Purdue University graduate with a triple major in Computer Graphics Technology, Web Development and Design, and Virtual Product Integration. My passion for web and graphic design spans broadly from creating both raster and vector graphics, to creating functional and aesthetically pleasing websites, and even creating CAD products using CATIA and NX9.','<br/>I\'ve worked on a wide variety projects including site design, web app support, and graphic design. I\'ve interned with <a href="https://www.textron.com/">Textron Inc.</a> in their IT leadership development program working on backend web development, and previously worked at <a href="https://www.epic.com/">Epic Systems</a> supporting their web and mobile-based patient portal application MyChart','Currently I work as a software engineer at <a href="https://ati.co">ATI</a> in Fort Wayne.','<br/>Feel free to check out my resume below to learn more about my professional credentials!','<div id="resume-button"><a href="JTarrResume.pdf">My Resume</a></div>']
    },
    projects: {
        web: [
            {
                name: 'Word:Clock',
                skills: 'Javascript + MomentJs, HTML, CSS',
                url: 'https://jrtarr-wordclock.netlify.com',
                description: 'A clock that highlights specific letters in a grid of letters to spell out the time.',
                iconPath: 'img/projects/wordclock.png'
            },
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
                name: 'Archers Alumni',
                skills: 'Wordpress, HTML, CSS',
                url: 'http://archersalumni.com',
                description: 'Designed site overhaul of Fort Wayne\'s South Side High School alumni association. Built site using Wordpress to give board members easy access to post content.',
                iconPath: 'img/projects/sshs.png'
            },
            {
                name: 'Execuwell/Excellwell',
                skills: 'WordPress, HTML, CSS',
                url: 'https://execuwell.com',
                description: 'Designed, created, and maintain website for Indianapolis-area wellness consultancy, Execuwell.',
                iconPath: 'img/projects/execuwell.png'
            }
        ],
        graphic: [
            {
                name: 'The Outliers - Nashville',
                description: 'Logo and merch designs for Nasvhille band The Outliers..',
                imagePath: 'img/projects/theOutliers.jpg'
            },
            {
                name: 'Spuly G',
                description: 'Album art and logo designs for Fort Wayne musician Spuly G.',
                imagePath: 'img/projects/spulyG.jpg'
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

export {content as default}