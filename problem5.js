const btn = document.getElementById("btn")
const body = document.querySelector("body")
const h3 = document.querySelector("h3")

function getRandomItem() {
    let arr = []
    for (let i = 0; i < 6; i++) {
        let color = ["1","2","3","4","5","6","7","8","9","a","b","d","e","f"] 
        const randomIndex = Math.floor(Math.random() * color.length);
        const item = color[randomIndex];
        arr.push(item)      
    }
    return arr.join("")
}


btn.addEventListener("click", (e) => {
    str = ""
    body.style.cssText = [`background-color:#${getRandomItem()};`]
    str+=getRandomItem()
    h3.innerHTML=str
})



