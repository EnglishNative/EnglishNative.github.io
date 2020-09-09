
function moveRect1(e){
     

     

     
    switch(e.keyCode){
         
        case 75:   // если нажата клавиша вверх K
            window.scrollBy(0, -100);
            break;
        case 74:   // если нажата клавиша вниз J
            window.scrollBy(0,100);
            break;
        
    }
}
 
addEventListener("keydown", moveRect1);


// document.body.style.overflow = 'hidden';
