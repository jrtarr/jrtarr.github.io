function spinThisBitch() {
    document.getElementById("logo").classList.add("spin");
    window.setTimeout(() => {  
        document.getElementById("logo").classList.remove("spin");
    }, 1000);
    console.log("I'm Working Kinda");
}