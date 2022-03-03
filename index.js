var randomNumber1= Math.floor((Math.random()*6)+1);//1-6
// alert(randomNumber1);
var randomDiceImage1 ="image/dice"+randomNumber1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="image/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);



if(randomNumber1>randomNumber2){
    //var newHeading=document.querySelector("h1");
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}

else if (randomNumber1<randomNumber2){
    //var newHeading=document.querySelector("h1");
    document.querySelector("h1").innerHTML=" 🚩 Player 2 wins"; 
}
else{
    //var newHeading= document.querySelector("h1");
    document.querySelector("h1").innerHTML="🚩🚩Draw";
}