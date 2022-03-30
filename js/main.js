const openPopUp = document.querySelectorAll('.open_pop_up');
const popUp = document.getElementById('pop_up'); //фон 
const popUpItem = document.getElementById('popup_item');
const popUpSuccesful = document.querySelector('.second__pop_up')
const secondPopUp = document.getElementById('second__popup')
const closePopUp = document.getElementById('close_popup')

secondPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.add('open')
    popUp.classList.remove('open');
    popUpItem.classList.remove('open');
})
popUpSuccesful.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.remove('open')
})
openPopUp.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popUp.classList.add('open');
        popUpItem.classList.add('open');
    })
});


closePopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUpSuccesful.classList.remove('open')
    popUp.classList.remove('open');
    popUpItem.classList.remove('open');

})

document.addEventListener('click', (e) => {
    if (e.target === popUp) {
        popUp.classList.remove('open');
        popUpItem.classList.remove('open');
    }
});

let sendButton = document.querySelector('.send__btn')

sendButton.addEventListener('click', (e) => {
    e.preventDefault();

})


// Scroll Nav
const missionButton = document.querySelector('.scroll__mission');
const missionSection = document.querySelector('.main__section');
const projectButton = document.querySelector('.scroll__projects')
const projectsSection = document.querySelector('.footer__description')
const kasipkerletSection = document.querySelector('.business__people')
const kasipkerButton = document.querySelector('.scroll__kasipkerler')

function scrlollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"

    });
}

missionButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrlollTo(missionSection);
})
projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    scrlollTo(projectsSection);
})





// Slider
$('.slider').slick({

    infinite: true,
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                arrows: false,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});