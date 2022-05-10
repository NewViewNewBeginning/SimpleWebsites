const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-nav");
const menuIconOpen = document.querySelector(".menu-icon-open");
const menuIconClose = document.querySelector('.menu-icon-close')

const openCloseMenu = () => {
	sideNav.classList.toggle('hidden')
    if(sideNav.classList.contains('hidden')){
        menuIconClose.classList.add('hide-icon')
        menuIconOpen.classList.remove('hide-icon')
    }else{
        menuIconOpen.classList.add('hide-icon')
        menuIconClose.classList.remove('hide-icon')
    }
};

menuBtn.addEventListener("click", openCloseMenu);
