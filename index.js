//sidebar

const menuItems=document.querySelectorAll('.menu-item');

// messages

const messageNoitification= document.querySelectorAll('#messages-notification');
const messages= document.querySelector('.messages');

//remove active class from all active items

const changeActiveItem=() => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display='none';
        } else{
            document.querySelector(".notification-popup").style.display='block';
            document.querySelector('#notification . notification-count').style.display ='none';

        }
    })


})


// =======================message=================

messageNoitification.addEventListener('click', () => {
    messages.style.boxshadow= '0 0 1rem var(--color-primary)';
    messageNoitification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxshadow='none';
    },2000);
})


// ==================== popup ===================


function changePillContent(x){
    let val = x;
    console.log(val);
    console.log(x);
    // Get pill
    let pilltab1 = document.getElementById('ex3-pills-1');
    let pilltab2 = document.getElementById('ex3-pills-2');
    let pilltab3 = document.getElementById('ex3-pills-3');

    //Get button
    let button1 = document.getElementById('button-1');
    let button2 = document.getElementById('button-2');
    let button3 = document.getElementById('button-3');

    pilltab1.classList.remove("active");
    pilltab2.classList.remove("active");
    pilltab3.classList.remove("active");

    button1.classList.remove("button-active");
    button2.classList.remove("button-active");
    button3.classList.remove("button-active");
    
    if(x == 1){
        pilltab1.classList.add("active");
        button1.classList.add("button-active");
    }
    
    if(x == 2){
        pilltab2.classList.add("active");
        button2.classList.add("button-active");
    }
    
    if(x == 3){
        pilltab3.classList.add("active");
        button3.classList.add("button-active");
    }
}