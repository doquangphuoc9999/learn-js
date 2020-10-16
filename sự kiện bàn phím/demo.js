let nobita = document.getElementById('nobita');

function upArrowPressed(){
     
    nobita.style.top = parseInt(nobita.style.top) - 5 + 'px';
}
function downArrowPressed(){

    nobita.style.top = parseInt(nobita.style.top) + 5 + 'px';
}
function leftArrowPressed(){
     
    nobita.style.left = parseInt(nobita.style.left) - 5 + 'px';
}
function rightArrowPressed(){
         
    nobita.style.left = parseInt(nobita.style.left) + 5 + 'px';
}

function moveSelection(evt){
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
        break;
        case 38:
            upArrowPressed();
        break;
        case 39:
            rightArrowPressed();
        break;
        case 40:
            downArrowPressed();
        break;
    }
}

window.addEventListener('keydown', moveSelection);

