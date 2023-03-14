// loader js
$(window).on("load", function () {
    $(".loader").delay(300).fadeOut(1000);
});

// Active Link
$(".navbar-m .links a").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).addClass("active");
    }
});

// Show And Hide Search Navbar
$('.open-search').on('click', function(){
  $('.main-search').toggleClass('active');
});

$('.close-search').on('click', function(){
  $('.main-search').removeClass('active');
});


// open-menu
// $('.open-menu').on('click', function(e){
//   e.preventDefault();
  
//   let menuClass = $(this).data('menu');
//   console.log(menuClass);
//   $('.mega-menu').removeClass('show')
//   $(`.${menuClass}`).toggleClass('show');
// })


// Toggle dropDown
let dropMenu = document.querySelectorAll('.mega-menu');

document.body.addEventListener('click', (e)=>{

  if(e.target.classList.contains('active-m')){

    removeAllActive();
    closeAllDrop();

  } else if (e.target.classList.contains('open-menu')){

    let menuClass = e.target.getAttribute('data-menu');
    removeAllActive();
    e.target.classList.add('active-m');
    closeAllDrop();
    $(`.${menuClass}`).addClass('show');

  } else{

    closeAllDrop();
    removeAllActive();

  }
})

function closeAllDrop(){
  dropMenu.forEach((drop) =>{
    drop.classList.remove('show');
  })
}

function removeAllActive(){
  let activeM = document.querySelectorAll('.active-m');
  activeM.forEach((ac) =>{
    ac.classList.remove('active-m');
  });
}

$(".mega-menu").click(function(e){
  e.stopPropagation();
});




// SideBar
$('.side-open').on('click', function(){
  $('.links').addClass('active');
  $('.overlay-m').fadeIn(600);
});

$('.close').on('click', function(){
  $('.links').removeClass('active');
  $('.overlay-m').fadeOut(500);
});

$('.overlay-m').on('click', function(){
  $('.links').removeClass('active');
  $(this).fadeOut(500);
});


// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
    e.stopPropagation();
});


// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.pass-icon');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.input-me');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }
}

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});


// Code Modal
$(document).ready(function(){
  let codes = document.querySelectorAll(".code");

  $(".code-container .code").first().focus();
  codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = "";
        if([idx + 1] < codes.length){
            setTimeout(() => codes[idx + 1].focus(), 10);
        }
      } else if (e.key === "Backspace") {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });

});


// Input Number
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// Heart
$('.heart').on('click', function(){
  if($(this).find('i').hasClass('fa-regular')){
    $(this).find('i').removeClass('fa-regular')
    $(this).find('i').addClass('fa-solid')
  } else{
    $(this).find('i').removeClass('fa-solid')
    $(this).find('i').addClass('fa-regular')
  }
})