///////color change start/////////

(function(){
let changeColor = document.querySelector('#change')
const body = document.querySelector('body')
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','tomato','orange']

body.style.backgroundColor = 'white'
changeColor.addEventListener('click', changeBackground)

function changeBackground(){
let colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
})();
///////message start/////////



function inputmsg(){
 // let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','tomato','orange']
   let message = document.querySelector("#message").value
  let viewmsg =document.querySelector("#viewmsg")
   console.log(message)
  
   viewmsg.innerHTML = message
  // let colorTex=  parseInt(Math.random()*colors.length)
   viewmsg.style.color =' white'
   viewmsg.style.backgroundColor =' tomato'
   viewmsg.style.padding =' 10px'
 if(message === ''){
     alert('please enter msg')
 }
  
}

//image slider

function slider(){
  const imgName=[
    "bb3","bb4","bb6","bb7"
]
const buttons = document.querySelectorAll('.btn')
const imgSelectDiv = document.querySelector('.img-container')

 let counter = 0
 buttons.forEach(function(button){
   button.addEventListener('click',function(e){
   if ( button.classList.contains('btn-left')){
     counter--
      if(counter < 0){
      counter =  imgName.length - 1
      
      }
      imgSelectDiv.style.backgroundImage =`url('./images/${imgName[counter]}.jpg`
     
   }
   console.log(imgSelectDiv)
   if(button.classList.contains('btn-right')){
     counter++
     if(counter > imgName.langth -1){
       counter = 0
      
     }
     console.log(imgSelectDiv)
     imgSelectDiv.style.backgroundImage =`url('./images/${imgName[counter]}.jpg')`
   }
   })
 })
};
 