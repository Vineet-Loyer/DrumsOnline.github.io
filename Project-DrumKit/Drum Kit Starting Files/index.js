for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{  var buttonInnerHTML=this.innerHTML;
   sound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}
);
}
document.addEventListener("keypress",function(event){
sound(event.key);
buttonAnimation(event.key);
}
);


function sound(key){
switch(key){
        case "w":var tom1=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":var tom2=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s":var tom3=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d":var tom4=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":var snare=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/snare.mp3");
                snare.play();
                break;
        case "k":var crash=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/crash.mp3");
                crash.play();
                break;
        case "l":var kick_bass=new Audio("/Project-DrumKit/Drum Kit Starting Files/sounds/kick-bass.mp3");
                kick_bass.play();
                break;
}
}

function buttonAnimation(currentKey){
        var active=document.querySelector("."+currentKey);
        active.classList.add("pressed");
        setTimeout(function(){
                active.classList.remove("pressed");
        },100);
}