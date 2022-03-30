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
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
})