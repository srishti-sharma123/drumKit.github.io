// Detecting Button press: 

var noOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i=0 ; i< noOfDrumsButtons ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function ()
{
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});
}

// Detecting Keyboard Press:

document.addEventListener("keypress" , function(event)
{
    makeSound(event.key);

    buttonAnimation(event.key);

}); 


function makeSound(key)
{
    switch (key) {
        case "w":
            var music1 = new Audio("sounds/1.mp3");
            music1.play();
        break;
        case "a":
            var music2 = new Audio("sounds/music2.mp3");
            music2.play();
        break;
        case "s":
            var music3 = new Audio("sounds/music3.mp3");
            music3.play();
        break;
        case "d":
            var music4 = new Audio("sounds/music4.mp3");
            music4.play();
        break;
        case "j":
            var music5 = new Audio("sounds/music5.mp3");
            music5.play();
        break;
        case "a":
            var music6 = new Audio("sounds/music6.mp3");
            music6.play();
        break;
        case "k":
            var music7 = new Audio("sounds/music7.mp3");
            music7.play();
        break;
        case "l":
            var music8 = new Audio("sounds/music8.mp3");
            music8.play();
        break;
        default: console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    } , 100);
}


