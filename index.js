// Method--1
// using display method


// code
// var randomNum1 = Math.floor(6*Math.random())+1;
// var randomNum2 = Math.floor(6*Math.random())+1;
//
// document.getElementsByClassName('dice')[0].style.display = "none";
// document.getElementsByClassName('dice')[randomNum1-1].style.display = "inline-block";
// document.getElementsByClassName('dice')[5+randomNum2].style.display = "inline-block";
//
// var head = document.getElementsByTagName('h1')[0];
// if(randomNum1>randomNum2)
//   head.innerText = "Player1 Wins";
// else if(randomNum1<randomNum2)
//   head.innerText = "Player2 Wins";
// else
//   head.innerText = "Draw";
//

// Method--2
// using Attribute Method
//comment img1 and img2 class
// code
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randSrc1 = "images/dice"+randomNumber1+".png";
var randSrc2 = "images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute('src', randSrc1);
image2.setAttribute('src', randSrc2);

if(randomNumber1>randomNumber2)
  document.querySelector('h1').innerHTML = "Player1 Wins";
else if(randomNumber1<randomNumber2)
  document.querySelector('h1').innerHTML = "Player2 Wins";
else
    document.querySelector('h1').innerHTML = "Draw";
