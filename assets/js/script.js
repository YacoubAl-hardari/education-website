// nav_Bar_changeColor on socrrl
window.addEventListener('scroll', () => {
    document.querySelector("#navBar").classList.toggle
        ('nav_Bar_changeColor', window.scrollY > 50);
})

// button go to the top  on socrrl
window.addEventListener('scroll', () => {
   const goTo_TOp = document.querySelector(".btn-got-to-top");
   goTo_TOp.classList.toggle('show-top', window.scrollY >430);
  
})
// open fage show anf=d hiden

const articles = document.querySelectorAll(".fag");
articles.forEach(fag => {
    fag.addEventListener('click', () => {
        fag.classList.toggle('shows');

        //    change icon 
        const icon = fag.querySelector(".fag_icon i");
        if(icon.className ==='fas fa-plus'){
            icon.className = "fas fa-minus";
        }
        else{
           icon.className='fas fa-plus'; 
        }

    })
})

// start swiper sliders 

var swiper = new Swiper(".mySwiper",{
    slidesPerView:1,
    loop:true,
    spaceBetween:30,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    // responsive slider 
    breakpoints:{
        1000:{
            slidesPerView:3
        }
    }
});

// btn to show menu responsive 

const open_menu_btn = document.querySelector('#open_menu_btn');
const close_menu_btn = document.querySelector('#close_menu_btn');
const nav_menu_ul = document.querySelector('.nav_menu_ul');

open_menu_btn.addEventListener('click',()=>{
    nav_menu_ul.classList.toggle("show_meun_btn");
    close_menu_btn.style.display="inline-block";
    open_menu_btn.style.display="none";
})

close_menu_btn.addEventListener('click',()=>{
    nav_menu_ul.classList.toggle("show_meun_btn");
    open_menu_btn.style.display="inline-block";
    close_menu_btn.style.display="none";
})
