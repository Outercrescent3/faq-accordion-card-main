const icons = document.querySelectorAll(".faq-question")

icons.forEach( function(icon){
  icon.addEventListener('click', function(e){
    const question = e.currentTarget.parentElement
    question.classList.toggle('faq-answer-ative')
  })
}) 



























/*
var question = document.querySelectorAll('.faq-question')
let answer = document.querySelectorAll('.faq-answer')

question.addEventListener("click", function(){ question.setAtribute('class','icon-active')})

*/
  

/*  

 for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
   this, function calc(){
    
   } })
  }


function clicado(){
  console.log()
}*/

/*function clicado(){
  for(var elemento in answer) {

}
}*/

 /*function clicado(){
    for(var resposta of answer){
  resposta.classList.toggle("show-answer");
  }}
*/










/*question.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("show-answer");
  });
});
*/







/*function clicado(){

  let answer = document.querySelectorAll('.faq-answer')[2]
  
 
  if(answer.classList.contains('show-answer')){

    question.classList.remove('show-answer')

}else{
    answer.classList.add('show-answer')
  }
}*/


//question.forEach(elemento => console.log(elemento))
