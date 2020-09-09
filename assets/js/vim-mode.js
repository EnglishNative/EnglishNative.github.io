
function moveRect1(e){
     
    // var blueRect = document.getElementById("blueRect");
    // получаем стиль для blueRect
    // var cs = window.getComputedStyle(blueRect);

    // var my_work_area = document.getElementById("work_area");
     
    // var left = parseInt(cs.marginLeft);
    // var top = parseInt(cs.marginTop);

    // var cur_display = '';
     
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
//addEventListener("keydown", moveRect1);
//moveRect1
// document.body.style.overflow = 'hidden';
