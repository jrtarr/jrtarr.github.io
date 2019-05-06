//Handles loading in content

import content from './content'

function renderPage(theme){
    renderAbout()
    renderProjects(theme)
    renderContact()
    renderFooter()
}

function renderAbout(){
    const aboutContainer = document.body.querySelector('#about-me')
    const aboutMe = content.textContent.aboutMe
    aboutContainer.innerHTML = ''

    aboutMe.forEach((line)=>{
        const aboutP = document.createElement('p')
        aboutP.innerHTML = line
        aboutP.classList.add('text-content')
        aboutContainer.appendChild(aboutP)
    })
}

function renderProjects(theme){
    const container = document.querySelector('#projects')
    container.innerHTML = ''
    if(theme === 'Web'){
        const projects = content.projects.web
        projects.forEach((project)=>{
            const projParent = document.createElement('div')
            projParent.classList.add('web-container','text-content')

            const title = document.createElement('h4')
            title.classList.add('proj-title')

            const link = document.createElement('a')
            link.classList.add('proj-link')

            const icon = document.createElement('img')
            icon.classList.add('proj-ico')

            const description = document.createElement('p')
            description.classList.add('proj-desc')

            const skills = document.createElement('i')
            skills.classList.add('proj-skills')

            //Adding content from project
            title.textContent = project.name
            skills.textContent = project.skills
            link.href = project.url
            link.innerHTML = 'Check it out!'
            icon.src = project.iconPath
            description.textContent = project.description

            projParent.appendChild(icon)
            projParent.appendChild(title)
            projParent.appendChild(skills)
            projParent.appendChild(description)
            projParent.appendChild(link)
            container.appendChild(projParent)
        })
    }else{
        const projects = content.projects.graphic
        projects.forEach((project)=>{
            const projParent = document.createElement('div')
            projParent.classList.add('graphic-container','text-content')

            const title = document.createElement('h4')
            title.classList.add('proj-title')

            const image = document.createElement('img')
            image.classList.add('proj-img')

            const description = document.createElement('p')
            description.classList.add('proj-desc')

            //Adding content from project
            title.textContent = project.name
            description.textContent = project.description
            image.src = project.imagePath

            projParent.appendChild(title)
            projParent.appendChild(description)
            projParent.appendChild(image)
            container.appendChild(projParent)
        })
    }
}

function renderContact(){

}

function renderFooter(){
    const socialContainer = document.querySelector('#social')
    const socialIcons = content.social
    socialContainer.innerHTML = ''

    socialIcons.forEach((item)=>{
        const iconLi = document.createElement('li')
        const icon = document.createElement('i')
        const link = document.createElement('a')

        item.iconClass.forEach((classItem)=>{icon.classList.add(classItem)})
        link.href = item.url

        link.appendChild(icon)
        iconLi.appendChild(link)
        socialContainer.appendChild(iconLi)
    })
}
export { renderPage }