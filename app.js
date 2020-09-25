
' use strict';

const menuBtn = document.querySelector('.c_btn'),
    menu = document.querySelector('.nav');

class UI {
    toggleBtn(){
        menu.classList.toggle('open');
        if(menu.classList.contains('open')){
            menuBtn.classList.add('active');
        } else {
            menuBtn.classList.remove('active');
        };
    };

    
};


function eventListener(){
    const ui = new UI();
    menuBtn.addEventListener('click',() => ui.toggleBtn());
};
eventListener();