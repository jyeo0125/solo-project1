const container = document.querySelector('.img-container')
const startButton = document.querySelector('.start-button')
const gameText = document.querySelector('.game-text')
// console.log(gameText)

document.querySelector('.start-button').addEventListener('click',()=> {
  // console.log('work')
  document.querySelector('#faceUp').classList.add('hidden')
  document.querySelector('.start-button').classList.add('hidden')
})
///// creat new array for containing creatImgCells function and use mixing(shuffle) function to mix the order of the li.





let cells=[];
cells = creatImgCells();
// console.log(cells)

miximg(cells).forEach(cell => container.appendChild(cell))

///// refrence form youtube (how to make puzzle form js)

function creatImgCells(){
  const newArry =[];
  Array(16).fill().forEach((data,i) =>{
    // console.log(i)
    const li = document.createElement('li')
      li.setAttribute('img-index', i)
      li.classList.add(`list${i}`)
      // console.log(li)
     newArry.push(li);
     })
  return newArry
}

function miximg(array){
  let index = array.length -1;
  while(index > 0){
    const randomImg = Math.floor(Math.random()*(index+1));
    [array[index], array[randomImg]] = [array[randomImg], array[index]]
    index--;
  }
  return array;
}