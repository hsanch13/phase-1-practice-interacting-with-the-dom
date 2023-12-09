const listOfLikes = document.querySelector(".likes") //grabbing the like element on the pg 
const ticker = document.getElementById("counter")
// gets timer to start on page load
let counter = 0
function count(){
    counter++
    ticker.textContent = counter // this is how it displays on the page
}
let countingInterval = setInterval(count, 1000)

const minusTime = document.getElementById("minus") // grabbing that specific minus button element on the page

minusTime.addEventListener('click', () => {
    counter -- // tells counter to go down when the minus button is clicked
    ticker.textContent = counter // how the number is able to appear on the counter/page

})

const plusTime = document.getElementById("plus") // grabbing that specific plus button element on the page

plusTime.addEventListener('click', () => {
    counter ++ // tells counter to go up when the minus button is clicked
    ticker.textContent = counter // how the number is able to appear on the counter/page
})

const heart = document.getElementById("heart") // grabbing the heart from the DOM

let likeList = {} // creating an empty object to send the following code into VV. We chose an object because it will keep the number that is liked and keep track of how many times we liked it.

heart.addEventListener("click", () => {
    if (likeList[counter]) { // 
        likeList[counter] = likeList[counter] + 1 // if it exists, then add 1 to it
    }
    else {
        likeList[counter] = 1 // creates each key value pair in the object. it start it.
    }
    let likeHtml = '' // creating an empty string
    for(const count in likeList){ // a "for... in" statement that iterates through every string 
        likeHtml += `<li>${count} has been liked ${likeList[count]} times</li>` // creates a string that will come out as a HTML list. First "count" refers to obj's "KEY" (the number liked) and "VALUE" (the number of times that number was liked)
    }
    listOfLikes.innerHTML = likeHtml;
    // THIS IS ANOTHER WAY TO WRITE THE CODE TO ACCOMPLISH THE SAME THING AS ABOVE BUT --
    // for (const count in likeList){
    //     const child = document.createElement('li')
    //     child.innerHTML = `${count} has been liked ${likeList[count]} times`
    //     listOfLikes.appendChild(child)
    // } -- this code would iterate through the entire obj and then print every single append each time we iterate through + the new like line. if we wanted to use code like we'd have to tell it to check if that chunk of code already exists and then we would have to replace it. it's much longer and more complicated but it could work.
})

const buttons = document.querySelectorAll("button")

function disableButtons(){
    buttons.forEach(button => {
        if (button.id != 'pause') {
            button.disabled == true ? button.disabled = false : button.disabled = true;
        }
    })
}

let isCounting = true 

const pause = document.getElementById("pause")

pause.addEventListener("click", () => {
    if (isCounting){
        clearInterval(countingInterval)
        pause.textContent = "resume"
    }
    else 
    {
        countingInterval = setInterval(count, 1000)
        pause.textContent = "pause"
    }
    isCounting = !isCounting;
    disableButtons();
})

const addComment = document.getElementById("comment-input")

const commentForm = document.getElementById("comment-form")

const commentList = document.getElementById("list")

commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newComment = document.createElement("p")
    newComment.textContent = addComment.value
    commentList.appendChild(newComment)
    commentForm.reset()
})



