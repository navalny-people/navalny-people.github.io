let open_menu = document.querySelector('#open');
let menu = document.querySelector('.menu')
let close_menu = document.querySelector('#close')
let close_ = document.querySelector('.close_')
let section = document.querySelector('section')
let info = document.querySelector('#info')

let sectTop = () => section.offsetTop;
let scrollMain = () => {
    let page = window.pageYOffset;
    page += 52;
    return page;
}

open_menu.onclick = () => {
    menu.style.display = 'block';
    close_menu.style.display = 'block';
    close_.style.display = 'block';
    open_menu.style.display = 'none'
}

close_.onclick = () => {
    menu.style.display = 'none';
    close_menu.style.display = 'none';
    close_.style.display = 'none';
    open_menu.style.display = 'block'
}

close_menu.onclick = () => {
    menu.style.display = 'none';
    close_menu.style.display = 'none';
    close_.style.display = 'none';
    open_menu.style.display = 'block'
}

let colorBlock = () => {
    if (scrollMain() >= sectTop()) {
        open_menu.style.color = "#474747"
    } else if (scrollMain() <= sectTop()) {
        open_menu.style.color = "#ffffff"
    }
}

window.addEventListener('scroll', colorBlock)