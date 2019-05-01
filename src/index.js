//Main page controllers live here
import { renderText,renderFooter } from "./views";

// const nav = document.querySelector('nav')
// const navButton = document.querySelector('#nav-menu')
// const navList = document.querySelector('#nav-list')
const themeButtons = document.querySelectorAll('.theme-button')
let theme = 'Web'
renderText()
renderFooter()

themeButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        themeButtons.forEach((button)=>{
            button.classList.toggle('active')
        })
        theme = e.target.value
        console.log(theme)
    })
})

// navButton.addEventListener('click',(e)=>{
//     console.log('Clicked!')
//     navButton.classList.toggle('expanded')
//     nav.classList.toggle('expanded')
//     //navList.classList.toggle('hidden')
// })