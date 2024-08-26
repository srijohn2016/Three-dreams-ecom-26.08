const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })

}

const homebar=document.getElementById('home-bar');
const homeclose=document.getElementById('home-close');
const navb=document.getElementById('navbar');


if (homebar){
    homebar.addEventListener('click',()=> {
        navb.classList.add('active');
    })
}

if(homeclose){
    homeclose.addEventListener('click',()=> {
        navb.classList.remove('active');
    })

}


const mobvbar=document.getElementById('bar');
const mobvclose=document.getElementById('close');
const mobvnavb=document.getElementById('navbar');


if (mobvbar){
    mobvbar.addEventListener('click',()=> {
        mobvnavb.classList.add('active');
    })
}

if(mobvclose){
    mobvclose.addEventListener('click',()=> {
        mobvnavb.classList.remove('active');
    })

}












