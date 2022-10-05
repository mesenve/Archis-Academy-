//document.getElementById("count-el").innerText = 5

//let count = 0
 
//console.log(count)

// function increment(){
//     console.log("The button was clicked")
// }

let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0 

console.log(saveEl)

function increment (){
    // console.log("clicked")
    count = count + 1
    //count += 1
    // console.log (count)
    countEl.innerText = count
}

function save (){
    let countStr = count + " - "

    // saveEl.innerText += countStr
     saveEl.textContent += countStr
     countEl.textContent = 0

    // console.log(count)
}
 
// save()

