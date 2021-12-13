// slider for main page
const slides = document.querySelectorAll(".slide");

const numberOfSlides = slides.length;

var slideNumber = 0;










    



    var reapeter = () => {
Playslider = setInterval(function(){
slides.forEach((slide) => {
slide.classList.remove("active");


});


slideNumber++;


if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
}

slides[slideNumber].classList.add("active");






},4000);




    }


    reapeter();



    

       // carousel //

       class Slider {
        constructor(place, imgs) {
            this.current = 0
            this.currnetPos = 0
    
            this.element = document.querySelector(place)
            this.imgs = imgs.map(img => {
                return `<img src="${img}" alt="">`
            })
            this.render()
    
            this.sliders = this.element.querySelectorAll('#slider__imgs img')
    
            this.element.querySelector('#slider__buttons').children[0].addEventListener('click', () => {
                this.prev()
            })
            this.element.querySelector('#slider__buttons').children[1].addEventListener('click', () => {
                this.next()
            })
        }
    
        next() {
            let width = 0
    
            if (this.current === this.sliders.length - 1) {
                this.current = 0
                this.currnetPos = 0
            } else {
                width = this.element.getBoundingClientRect().width
                this.current += 1
            }
    
    
            this.sliders.forEach(el => {
                el.style.transform = `translateX(${-(width + this.currnetPos)}px)`
            })
    
    
            this.currnetPos += width
        }
    
        prev() {
    
            let width = this.element.getBoundingClientRect().width
    
            if (this.current === 0) {
                this.currnetPos = width * this.sliders.length
                this.current = this.sliders.length - 1
            } else {
                this.current -= 1
            }
    
    
            this.sliders.forEach(el => {
                el.style.transform = `translateX(-${this.currnetPos - width}px)`
            })
    
            this.currnetPos -= width
        }
    
        render() {
            const pl = this.element.querySelector('#slider__imgs')
            pl.innerHTML = ''
            this.imgs.forEach(item => {
                pl.insertAdjacentHTML('beforeend', item)
            })
        }
    }
    
    const slider = new Slider('#slider', [
        'ijsbeker-wit-klein-bio-lepel-klein_1.jpg',
        'Blueberry-Ice-Cream-recipe-800x800.jpg',
       
        '54677722.gif'
        
    ])




 


      







let tabsPane =  document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");


for (let i=0; i< tabsPane.length; ++i){

    tabsPane[i].addEventListener("click", function(){


     document.getElementsByClassName("tab-header")[0].getElementsByClassName("ShowDiv")[0].classList.remove("ShowDiv");


     
        tabsPane[i].classList.add("ShowDiv");


        document.getElementsByClassName("tab-content")[0].getElementsByClassName("ShowDiv")[0].classList.remove("ShowDiv");


        document.getElementsByClassName("tab-content")[0].getElementsByTagName("div")[i].classList.add("ShowDiv");


    })

}







//


var Burgers = document.querySelector('#burgers');


var BurgerMenu = document.querySelector('.nav-links');


Burgers.addEventListener('click', function() {

    BurgerMenu.classList.toggle('openNav');
    
})



//



let btnitems = document.querySelectorAll('.item .btnitem');

for (var i=0; i<btnitems.length; i++){

    btnitems[i].addEventListener('click', function(e){

        var btn = e.target;

        if(btn.className == "btnitem open"){

            removeClass();
        } else{
            removeClass();
            btn.classList.add('open');

        }


       

        


    })
}

function removeClass(){
    for (var i=0; i<btnitems.length; i++){

        btnitems[i].classList.remove('open');

    }

}



var links = document.querySelectorAll('.nav-links li a');

links.forEach(li =>{
   
    li.addEventListener('click', () =>{
        removelinks();
        li.classList.add('activeClass');

    })
})


function removelinks(){

    links.forEach(li => {


        li.classList.remove('activeClass');
    })
}