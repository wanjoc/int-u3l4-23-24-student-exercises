
let title=document.querySelector(".title");
let storyOpening=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let homeButton=document.querySelector(".home-button");
let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let thugCrew=document.querySelector(".thug-crew");
let optionTwoScreen=document.querySelector(".option-two-screen");
let uncleRuckus=document.querySelector(".uncle-ruckus");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");
let buttonThree=document.querySelector(".option-three")



  buttonOne.addEventListener('click', function() {
   optionOneScreen.style.display="block";
   storyOpening.style.display="none";
   buttons.style.display="none";
   title.style.display="none"; });
thugCrew.addEventListener('click', function(){
optionOneEnd.style.display="block";
  optionOneScreen.style.display="none";
});

buttonTwo.addEventListener('click', function(){
   optionTwoScreen.style.display="block";
   storyOpening.style.display="none";
   buttons.style.display="none";
   title.style.display="none";
 });


uncleRuckus.addEventListener('click', function(){ 
  optionTwoEnd.style.display="block";
  optionTwoScreen.style.display="none";                             
});
 buttonThree.addEventListener('click', function(){
   optionOneScreen.style.display="none";
  optionTwoScreen.style.display="none";
   optionOneEnd.style.display="none";
   optionTwoEnd.style.display="none";
   storyOpening.style.display="block";
   buttons.style.display="block";
   title.style.display="block";
 });