const article = document.querySelectorAll("article")
const funcio = document.querySelector("#funcio")
const modal = document.querySelector(".modalFuncio")
const closeBtn = document.querySelector(".close-btn")

for(let i = 0; i < article.length; i++) {
    let button = document.querySelectorAll(".buy-btn")

    article[i].addEventListener("mouseover", () => {
        
        button[i].style.visibility = "visible"
    }) 
    
    article[i].addEventListener("mouseout", () => {
        button[i].style.visibility = "hidden"
    })    
     
}

funcio.addEventListener("click", () => {
    modal.style.visibility = "visible"

})

closeBtn.addEventListener("click", () => {
    modal.style.visibility = "hidden"
})

