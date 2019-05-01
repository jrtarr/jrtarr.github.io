//Handles loading in content

import content from './content'

function renderText(){
    const aboutMe = content.textContent.aboutMe
    aboutMe.forEach((line)=>{
        const aboutP = document.createElement('p')
    
        aboutP.innerHTML = line
        aboutP.classList.add('text-content')
        document.querySelector("#about-me").appendChild(aboutP)
    })
}

function renderFooter(){
    const socialIcons = content.social
    socialIcons.forEach((item)=>{
        const iconLi = document.createElement('li')
        const icon = document.createElement('i')
        const link = document.createElement('a')

        item.iconClass.forEach((classItem)=>{icon.classList.add(classItem)})
        link.href = item.url

        link.appendChild(icon)
        iconLi.appendChild(link)
        document.querySelector('#social').appendChild(iconLi)
    })
}

export { renderText,renderFooter }