const counter = document.getElementById("counter")
const plusB = document.getElementById("plus")
const minusB = document.getElementById("minus")
const heartB = document.getElementById("heart")
const likesList = document.querySelector(".likes")
const pauseB = ductument.getElementById("pause")

setInterval(function(){
    counter.innerText = ++counter.innerText
}, 1000)

plusB.addEventListener("click", () => {
    counter.innerText = ++counter.innerText
})

minusB.addEventListener("click", () => {
    counter.innerText = --counter.innerText
})
heartB.addEventListener("click", likeNum)

function likeNum(){
    const foundLi = document.querySelector(`li[data-num="${counter.innerText}"]`)
    if(!foundLi){
        const li = document.createElement('li')
        li.dataset.num = counter.innerText
        li.innerHTML = `${counter.innerText} has been liked <span>1</span> time`
        likesList.append(li)

    } else {
        foundLi.children[0].innerText = ++foundLi.children[0].innerText
        }
    }
// pauseB.addEventListener("click", () => {
// clearInterval(intervalTimer)
// })