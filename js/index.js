// Your code goes here
const links = document.getElementsByClassName('nav-link');

const button1 = document.querySelector('.destination:nth-of-type(1) .btn');

const mainNav = document.querySelector('.main-navigation');

const title = document.querySelector('.logo-heading');

const text = document.querySelector('.text-content:nth-of-type(1) h2');

const text2 = document.querySelector('.text-content:nth-of-type(2) h2');

const par = document.querySelector('.intro p');

const image = document.querySelector('img');
//EventListeners

image.addEventListener('dblclick', event => image.style.display = 'none');

document.addEventListener('wheel', function(event) {
    mainNav.style.backgroundColor = 'black';
    mainNav.style.transitionProperty = 'background-color';
    mainNav.style.transitionDuration = '4s';
    mainNav.style.transitionDelay = '2s';  
    title.style.color = 'red';
    title.style.transitionProperty = 'color';
    title.style.transitionDuration = '4s';
    title.style.transitionDelay = '2s';
});

button1.addEventListener('mousedown', event => button1.style.color = 'red');

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        button1.style.color = 'black';
    }
});

text.addEventListener('mouseover', event => text.style.color = 'blue');

text2.addEventListener('mouseenter', event => text2.style.color = 'green');

links.addEventListener('onclick', event => links.style.color = 'red');

links.addEventListener('focus', event => links.style.backgroundColor = 'white');

document.addEventListener('scroll', event => par.style.backgroundColor = 'red');

document.addEventListener('resize', function(event) {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}); 







