// Robin Schepers
// https://www.youtube.com/watch?v=g_vXSKbfUiQ&t=145
const themeButton = document.querySelector('.theme-button');
const hoverIcon1 = document.querySelector('#icon-hover1')
const hoverIcon2 = document.querySelector('#icon-hover2')
const hoverIcon3 = document.querySelector('#icon-hover3')
const hoverNav1 = document.querySelector('#nav-hover1')
const hoverNav2 = document.querySelector('#nav-hover2')
const hoverNav3 = document.querySelector('#nav-hover3')
const hoverNav4 = document.querySelector('#nav-hover4')
const hoverButton1 = document.querySelector('#button-hover1')
const hoverButton2 = document.querySelector('#button-hover2')
const hoverButton3 = document.querySelector('#button-hover3')
const hoverButton4 = document.querySelector('#button-hover4')
const hoverButton5 = document.querySelector('#button-hover5')
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
});
hoverIcon1.addEventListener('mouseover', () =>{
    hoverIcon1.style.color = "#8685EF";
});
hoverIcon1.addEventListener('mouseout', ()=>{
    hoverIcon1.style.color = "var(--clr-dark-extra)";
});hoverIcon2.addEventListener('mouseover', () =>{
    hoverIcon2.style.color = "#8685EF";
});
hoverIcon2.addEventListener('mouseout', ()=>{
    hoverIcon2.style.color = "var(--clr-dark-extra)";
});hoverIcon3.addEventListener('mouseover', () =>{
    hoverIcon3.style.color = "#8685EF";
});
hoverIcon3.addEventListener('mouseout', ()=>{
    hoverIcon3.style.color = "var(--clr-dark-extra)";
});
hoverNav1.addEventListener('mouseover', ()=>{
    hoverNav1.style.color = "#8685EF";
});
hoverNav1.addEventListener('mouseout', ()=>{
    hoverNav1.style.color = "var(--clr-dark-extra)";
});
hoverNav2.addEventListener('mouseover', ()=>{
    hoverNav2.style.color = "#8685EF";
});
hoverNav2.addEventListener('mouseout', ()=>{
    hoverNav2.style.color = "var(--clr-dark-extra)";
});
hoverNav3.addEventListener('mouseover', ()=>{
    hoverNav3.style.color = "#8685EF";
});
hoverNav3.addEventListener('mouseout', ()=>{
    hoverNav3.style.color = "var(--clr-dark-extra)";
});
hoverNav4.addEventListener('mouseover', ()=>{
    hoverNav4.style.color = "#8685EF";
});
hoverNav4.addEventListener('mouseout', ()=>{
    hoverNav4.style.color = "var(--clr-dark-extra)";
});

hoverButton1.addEventListener('mouseover', ()=>{
    hoverButton1.style.backgroundColor = "var(--clr-dark-extra)";
    hoverButton1.style.color = "var(--clr-light)";
});
hoverButton1.addEventListener('mouseout', ()=>{
    hoverButton1.style.backgroundColor = "#8685EF";
    hoverButton1.style.color = "var(--clr-dark)";
});
hoverButton2.addEventListener('mouseover', ()=>{
    hoverButton2.style.backgroundColor = "var(--clr-dark-extra)";
    hoverButton2.style.color = "var(--clr-light)";
});
hoverButton2.addEventListener('mouseout', ()=>{
    hoverButton2.style.backgroundColor = "#8685EF";
    hoverButton2.style.color = "var(--clr-dark)";
});
hoverButton3.addEventListener('mouseover', ()=>{
    hoverButton3.style.backgroundColor = "var(--clr-dark-extra)";
    hoverButton3.style.color = "var(--clr-light)";
});
hoverButton3.addEventListener('mouseout', ()=>{
    hoverButton3.style.backgroundColor = "#8685EF";
    hoverButton3.style.color = "var(--clr-dark)";
});
hoverButton4.addEventListener('mouseover', ()=>{
    hoverButton4.style.backgroundColor = "var(--clr-dark-extra)";
    hoverButton4.style.color = "var(--clr-light)";
});
hoverButton4.addEventListener('mouseout', ()=>{
    hoverButton4.style.backgroundColor = "#8685EF";
    hoverButton4.style.color = "var(--clr-dark)";
});
hoverButton5.addEventListener('mouseover', ()=>{
    hoverButton5.style.backgroundColor = "var(--clr-dark-extra)";
    hoverButton5.style.color = "var(--clr-light)";
});
hoverButton5.addEventListener('mouseout', ()=>{
    hoverButton5.style.backgroundColor = "#8685EF";
    hoverButton5.style.color = "var(--clr-dark)";
});





