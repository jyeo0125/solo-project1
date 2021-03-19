const imgContainer = document.querySelector('#img-container')
const startButton = document.querySelector('.startButton')
const cell = document.querySelectorAll(".cell")


function Ramdomize(res) {
    return Math.floor(Math.random() * Math.floor(res));
  }
  console.log(Ramdomize(cell.length))


// function getRandomNum(pic) {
//     let picPosition = array.length -1;
//     while (picPosition > 0){
//         const randomImg = Math.floor(Math.random()*(picPosition+1));
//         [pic[picPosition], pic[randomImg]] = [pic[randomImg], pic[picPosition]]
//         picPosition--;
        
//     }
//     return picPosition
    
// }
  


document.querySelector('#button').addEventListener('click', () => { 
    // console.log('clicked')
    document.querySelector('#faceUp').classList.add('hidden')
    document.querySelector('#button').classList.add('hidden')
})




