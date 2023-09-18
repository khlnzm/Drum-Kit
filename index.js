// document.querySelector('button').addEventListener('click', 
// handleClick);

// function handleClick(){
//     alert('I got click!')
// }

// document.querySelectorAll('button')[0].addEventListener('click', 
// function(){
//     alert('I got click!')
// });


// document.querySelectorAll('button')[0].addEventListener('click', 
// handleClick);

// function handleClick(){
//     alert('I got click!')
// }

var numberOfDrumsButtons = document.querySelectorAll('.drum').length; 

for (var i = 0;i < numberOfDrumsButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener
    ('click', function(){
        // alert('i got clicked!');
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        // console.log(this);
        switch (this.innerHTML){
            case 'w': 
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break; 

            case 'a': 
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break; 

            case 's': 
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break; 

            case 'd': 
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break; 

            case 'j': 
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break; 

            case 'k': 
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break; 

            case 'l': 
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break; 

        default:
            console.log(this.innerHTML);
        }
    });
}

document.addEventListener
    ('keydown', function(e){
        console.log(e);
        makeSound(e.key);
        buttonAnimation(e.key);
    })

function buttonAnimation(currentKey){
    var activateButton = document.querySelector('.' + currentKey);
    activateButton.classList.add('pressed');
    setTimeout(function(){
        activateButton.classList.remove('pressed');
    }, 100);
}   

function makeSound(key){
    switch (key){
        case 'w': 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break; 

        case 'a': 
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 

        case 's': 
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 

        case 'd': 
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break; 

        case 'j': 
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 

        case 'k': 
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break; 

        case 'l': 
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break; 

    default:
        console.log(this.innerHTML);
    }
}

    for (var i = 0;i < numberOfDrumsButtons; i++){
        document.querySelectorAll('.drum')[i].addEventListener
        ('click', function(){
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        })
    }