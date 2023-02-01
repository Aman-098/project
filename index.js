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