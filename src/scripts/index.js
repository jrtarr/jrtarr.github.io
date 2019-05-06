//Main page controllers live here
import { renderPage } from "./views";
// import "./../styles/style.scss"
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