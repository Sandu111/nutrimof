const images = [{
        src: 'images/image.jpg',
        title: ' WE ARE TOP CLASS NUTRITIONAL EXPERTS',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'About Us'


    },

    {
        src: 'images/image2.jpg',
        title: 'CAREFULLY PLANNED HEALTHY DIETS',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Read More'
    },

    {
        src: 'images/image3.jpg',
        title: ' HEALTHY LIFESTYLE MEANS A HEALTHY BODY',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Our Diets'
    }

]
let globalSIndex = 0
const allImages = document.querySelector('#all-slides')


images.forEach((slide, i) => {
    allImages.innerHTML += `
        <div class = "slide">
        <img src = "${slide.src}" class = "slide-img" >
        <h2>${slide.title}</h2>
        <p>${slide.desc}</p>
        <button>${slide.btn}</button>
        

    </div>
`
})


showSlide(globalSIndex)

function showSlide(sIndex) {
    const slides = document.querySelectorAll('.slide')

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slides[sIndex].classList.add('active')

    globalSIndex += 1
    checkIndex()
    setTimeout(showSlide, 2000, globalSIndex)
}

function checkIndex() {
    if (globalSIndex >= images.length) {
        globalSIndex = 0
    } else if (globalSIndex < 0) {
        globalSIndex = images.length - 1
    }
}