const container = document.querySelector('.img-container')
const startButton = document.querySelector('.start-button')
const gameText = document.querySelector('#finish')
const statusDiv = document.querySelector('.status')

/////sound
let startSound = new Audio('Sound/clickandpopmp3.mp3')
let dragSound = new Audio('Sound/dragSound.mp3')
// console.log(statusDiv)
//player change function///////////////////////

document.querySelector('.start-button').addEventListener('click',()=> {
  // console.log('work')
  document.querySelector('#faceUp').classList.add('hidden')
  document.querySelector('.start-button').classList.add('hidden')
  startSound.play()
})
/* drag event  reference by https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event and Youtube and https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin
https://www.kirupa.com/html5/drag.htm */

container.addEventListener('dragstart', (e) => {
  // console.log(e)
  draged.el = e.target;
  draged.class = e.target.className;
  draged.index = [...e.target.parentNode.children].indexOf(e.target)
  dragSound.play()
})

container.addEventListener('dragover', (e) => {
  e.preventDefault()
  })

container.addEventListener('drop', (e) => {
  // console.log(e.target)
  if(e.target.className !== draged.class){
    let originPlace;
    let isLast = false;
  
    if(draged.el.nextSibling){
      originPlace =draged.el.nextSibling
    } else {
      originPlace =draged.el.previousSibling
      isLast = true;
    }

    
///////////// refrence Youtube ////////////////////////////////////
    const dropedIndex = [...e.target.parentNode.children].indexOf(e.target)
    draged.index > dropedIndex ? e.target.before(draged.el) : e.target.after(draged.el)
    isLast ? originPlace.after(e.target) : originPlace.before()
  }
  changeText();
  finishChecker();
})

function changeText() {
  let x = document.querySelector('#status');
  if (x.innerHTML === "Player1") {
    x.innerHTML = "Player2";
  }else{
    x.innerHTML ="Player1"
  }
}
function finishChecker() {
  const currentList =[... container.children];
  const unMatched = currentList.filter((li, index)=>{
    return Number(li.getAttribute('img-index')) !== index;
  })
  if(unMatched.length === 0){
    
    document.querySelector('#faceUp').classList.remove('hidden')
    document.querySelector('#winner').classList.remove('hidden')
    document.querySelector('#endGame').classList.remove('hidden')
  }
  console.log(unMatched)
   
}

const draged ={
  el:null,
  class:null,
  index:null,
}


///// creat new array for containing creatImgCells function and use mixing(shuffle) function to mix the order of the li. This idea form the youtude.
let cells=[];
setGame();



//////////reference settimeout function https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
function setGame(){
  cells = creatImgCells();
  // console.log(cells)
    cells.forEach(cell => container.appendChild(cell))
    setTimeout(()=>{
      miximg(cells).forEach(cell => container.appendChild(cell))
    },3000)
}


function creatImgCells(){
  const newArry =[];
  Array(16).fill().forEach((data,i) =>{
    // console.log(i)
    const li = document.createElement('li')
      li.setAttribute('img-index', i)
      li.setAttribute('draggable','true')
      li.setAttribute('id',i)
      li.classList.add(`list${i}`)
      // console.log(li)
     newArry.push(li);
     })
  return newArry
}

////// This format from the Youtube "how to randomize the order of puzzle"
function miximg(array){
  let index = array.length -1;
  while(index > 0){
    const randomImg = Math.floor(Math.random()*(index+1));
    [array[index], array[randomImg]] = [array[randomImg], array[index]]
    index--;
  }
  return array;
}
