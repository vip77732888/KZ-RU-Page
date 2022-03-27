// Accordion
const sections = document.querySelectorAll("details");
sections.forEach((section) => section.addEventListener('toggle', toggleAcordeon));

function toggleAcordeon() {
    this.open && sections.forEach((section) => {
        if (section !== this && section.open) {
            section.open = false;
        }
    });
};
//Slider
const slider = document.getElementById('slider');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dotActive = document.getElementById('active');

dot1.onclick = function() {
    slider.style.transform = 'translate(0)';
    active.style.top = '0px';
}
dot2.onclick = function() {
    slider.style.transform = 'translate(-100%)';
    active.style.top = '0px';
}
dot3.onclick = function() {
    slider.style.transform = 'translate(50%)';
    active.style.top = '0px';
}
dot4.onclick = function() {
    slider.style.transform = 'translate(-75%)';
    active.style.top = '0px';
}