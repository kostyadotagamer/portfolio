const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav/nav-close.svg";
    }   else{
        navBtnImg.src = "./img/nav/nav-open.svg";
    }
}

window.onload = () => {
      document.body.classList.add('shift-left');
    };

AOS.init();