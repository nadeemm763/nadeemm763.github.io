$(window).on("load", function(){
    $('#loader_wrapper').fadeOut('slow');
});
// Header Scroll
let nav = document.querySelector(".navbar");
$( window ).scroll(function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 
)

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

/// Year retriver
document.getElementById("year").innerHTML = (new Date().getFullYear());



// JQuery for Certificates' Section
$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});

$('#contact-form').submit((e)=>{
    e.preventDefault();
})

// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    
        
const skillSection = document.getElementById('pills-skill-tab');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;

});

}
flag=0;
window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;


    if(sectionPos < screenPos && !flag){
        showProgress();
        flag=1;
    }
    else{
        if(!flag)
            hideProgress();
    }
});

