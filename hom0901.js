const stop = document.querySelector('[data-stop]')
const start = document.querySelector('[data-start]');
stop.disabled = true // ustalamy dostępność


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let myinterwal 


function zmianaColorow() {
  console.log();
  //setInterval(function () {window.alert(123)}, 1000);  //interwał czasowy
   myinterwal = setInterval(randomcolor, 500)
   stop.disabled = false
   start.disabled = true

}


function randomcolor(){
  document.body.style.backgroundColor=getRandomHexColor()

}
function stopColorow(){
  clearInterval(myinterwal)
  stop.disabled = true
   start.disabled = false
}


stop.addEventListener('click', stopColorow)

start.addEventListener('click', zmianaColorow);
console.log();



  
