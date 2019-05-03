//Main page controllers live here
import { renderPage } from "./views";

// const nav = document.querySelector('nav')
// const navButton = document.querySelector('#nav-menu')
// const navList = document.querySelector('#nav-list')
const themeButtons = document.querySelectorAll('.theme-button')
let theme = 'Web'
renderPage(theme)

themeButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        themeButtons.forEach((button)=>{
            button.classList.toggle('active')
        })
        theme = e.target.textContent
        renderPage(theme)
    })
})

// navButton.addEventListener('click',(e)=>{
//     console.log('Clicked!')
//     navButton.classList.toggle('expanded')
//     nav.classList.toggle('expanded')
//     //navList.classList.toggle('hidden')
// })