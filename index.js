const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})

const arrows = document.querySelectorAll('.arrow');
const ans = document.querySelectorAll('.ans');
let status = 0;

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => {
        if (status === 0) {
            ans[i].setAttribute('style', 'display: block !important');
            arrows[i].classList.add('arrow-change');
            arrows[i].classList.remove('arrow-reverse');
            status = 1;
          } else {
            ans[i].style.display = "none";
            arrows[i].classList.remove('arrow-change');
            arrows[i].classList.add('arrow-reverse');
            status = 0;
          }
    })
    
}