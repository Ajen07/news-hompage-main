const menu=document.getElementById('menu')
const sideBar=document.getElementById("side-bar")
const sideBarClose=document.getElementById("side-bar-close")
menu.addEventListener('click',()=>{
    if(menu.src='./assets/images/icon-menu.svg'){
        sideBar.classList.add('show')
    }
})

sideBarClose.addEventListener('click',()=>{
    if(sideBarClose.src='./assets/images/icon-menu-close.svg'){
        sideBar.classList.remove('show')
    }
})