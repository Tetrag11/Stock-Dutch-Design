const nav = document.querySelector('.overlay');
const cont = document.querySelector('.overlay-content');
const burger = document.querySelector('.burger');
const dropdown = document.querySelectorAll('.dropdown');
const overlay_img = document.querySelector('.overlay-img');
const test = document.querySelectorAll('.link');
const body = document.querySelector("#b");


// stuff relevant to img move animations
let constrain = 400; //to slow down mouse rotation
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer-1");
let ex1Layer2 = document.getElementById("ex1-layer-2");
let ex1Layer3 = document.getElementById("ex1-layer-3");
let ex1Layer4 = document.getElementById("ex1-layer-4");
let ex1Layer5 = document.getElementById("ex1-layer-5");
let ex1Layer6 = document.getElementById("ex1-layer-6");
let ex1Layer7 = document.getElementById("ex1-layer-7");
let exDummy = document.getElementById("boxdum");

// stuff related to vertically move img
let verticalConstain = 500;
let verticalContainer = document.getElementById("vertical-move-parent");
let verticalImg = document.getElementById("verticalmove");

// stuff related to the sorcery that change rotation direction of the logo

let logoslow = document.querySelector('.logo-slow');
let logoslower = document.querySelector('.logo-slower');

// stuff related to threeee

let parent_1 = document.querySelector('.parent-1');
let child_1  = document.querySelector('.heading-1');
let backcolor_1 = document.querySelector('.back-color-1');

let parent_2 = document.querySelector('.parent-2');
let child_2  = document.querySelector('.heading-2');
let backcolor_2 = document.querySelector('.back-color-2');

let parent_3 = document.querySelector('.parent-3');
let child_3  = document.querySelector('.heading-3');
let backcolor_3 = document.querySelector('.back-color-3');
let useless = document.querySelector('.useless');

let corehide = document.querySelector('.corehide');
let t = 300;

// stuff related to vertically move img on white background
let whiteContrain = 50;
let white_container = document.querySelector('.whitebackground')
let white_vert_1 = document.querySelector('.white-vert-1');
let white_vert_2 = document.querySelector('.white-vert-2');
let white_img_1 = document.querySelector('.white-img-1');
let white_img_2 = document.querySelector('.white-img-2');

// stuff related to messing with z-indexes on white background

let l1 = document.querySelector('.l-1'); 
let l2 = document.querySelector('.l-2'); 
let l3 = document.querySelector('.l-3'); 
let l4 = document.querySelector('.l-4'); 
let l5 = document.querySelector('.l-5'); 
let lb = document.querySelector('.lookbook'); 

// stuff related to slideshow_2
let slideshow_2 = document.querySelector('.slideshow-2-other');
let slidewrapper = document.querySelector('.slidewrapper');
let text_animation = document.querySelector('.text-animation-1');


let slidewrapper_other = document.querySelector('.slidewrapper-other');
let text_animation_other = document.querySelector('.text-animation-1-other');

// stuff related to parallax

let parallax_img = document.querySelector('.parallax-img');
let parallax_img_other = document.querySelector('.parallax-img-other');


const img =["url(/img/navimg1.jpg)", " url(/img/navimg2.jpg)", " url(/img/navimg3.jpg)", " url(/img/navimg4.jpg)", " url(/img/navimg5.jpg)", " url(/img/navimg6.jpg)"];

for (let ind = 0; ind < test.length; ind++) {
    const ele = test[ind];

   ele.addEventListener("mouseout", function( event ) {

        var child = event.target.firstElementChild;
       if (child.className == "slider") {
        child.style.animation = "unreveal 1s";
       
       }
       
        
    
      }, false);
    
    ele.addEventListener("mouseover", function( event ) {
    
        var child = event.target.firstElementChild;
        if (child.className == "slider") {
         child.style.animation = "reveal 1s forwards";
        }
        
        
      }, false);
    
    
}









function openNav(){
    nav.style.animation = "fromtop 1s forwards"; 
    cont.style.display = "block";

const random = Math.floor(Math.random() * img.length);
overlay_img.style.backgroundImage = img[random];



// decide whether nav bar is on img or not
let myWidth = window.innerWidth;

  // your size calculation code here
if (myWidth >479) {
    overlay_img.style.backgroundImage = img[random];
}
else{
    overlay_img.style.backgroundImage = "none";
}
window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
let myWidth = window.innerWidth;

  // your size calculation code here
if (myWidth >479) {
    overlay_img.style.backgroundImage = img[random];
}
else{
    overlay_img.style.backgroundImage = "none";
}
};


    for (let index = 0; index < dropdown.length; index++) {
        const element = dropdown[index];
        
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0%)";
        }, t);
        t = t + 100;    

        
    }   
    
}
// try using animations

function closeNav(){
    nav.style.animation = "frombottom 1s"; 

    for (let index = 0; index < dropdown.length; index++) {
        const element = dropdown[index];
        element.style.opacity = "0";
        element.style.transform = "translateY(-100%)";
        t = 300;
    }
    
}


// change properties on left and right classes
var img1change = document.querySelectorAll("#img1");
var img2change = document.querySelectorAll("#img2");
var onleft = true;

function leftProp() {
    document.getElementById("b").style.backgroundColor = "rgba(200,159,103,255)";
    if (onleft !== true) {

        for (let index = 0; index < img1change.length; index++) {
            const img1 = img1change[index];
            img1.style.height = "0";
            img1.style.opacity = "0";
            
        }

        for (let index = 0; index < img2change.length; index++) {
            const img2 = img2change[index];
            img2.style.opacity = "1";
            if (img2.classList.contains('difh') == true) {
                img2.style.height = "16vw";
            }
            else{
                img2.style.height = "100%";
            }
                
        }
    }
}

function rightProp() {
    document.getElementById("b").style.backgroundColor = "rgba(181,150,158,255)";
    onleft = false;
    for (let index = 0; index < img1change.length; index++) {
        const img1 = img1change[index];
        img1.style.opacity = "1";
        if (img1.classList.contains('difh') == true) {
            img1.style.height = "16vw";
        }
        else{
            img1.style.height = "100%";
        }
        
    }

    for (let index = 0; index < img2change.length; index++) {
        const img2 = img2change[index];
        img2.style.height = "0";
        img2.style.opacity = "0";
            
    }
}


// stuff related to move images starts here

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let dumpos = exDummy.getBoundingClientRect();
  //The degree of rotation can be obtained when the current mouse position is subtracted by the element mouse position 
    if (el.classList.contains("team-2")) {
      let calcX = (y - dumpos.y - (box.height / 2)) / constrain;
      let calcY = (x - dumpos.x - (box.width / 2)) / constrain;
  
      return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) "
      + "   translate3d("+ calcY*25 +"px," + calcX*15 + "px,0) "; //the x and y values are reversed to prevent inversion of movement
    }
    else{
      let calcX = -(y - dumpos.y - (box.height / 2)) / constrain;
      let calcY = (x - dumpos.x - (box.width / 2)) / constrain;
  
      return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) "
      + "   translate3d("+ calcY*25 +"px," + calcX*15 + "px,0) "; //the x and y values are reversed to prevent inversion of movement
    }
    
  };
  
   function transformElement(el, xyEl) { //el is the element, in this case its "ex1Layer". xyel is the previous position variable
    el.style.transform  = transforms.apply(null, xyEl);//transform is the above function. The apply function provides arguments to its assigned function
  }
  
  // start from here
  
  mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]); //position is an array
    let position2 = xy.concat([ex1Layer2]);
    let position3 = xy.concat([ex1Layer3]);
    let position4 = xy.concat([ex1Layer4]);
    let position5 = xy.concat([ex1Layer5]);
    let position6 = xy.concat([ex1Layer6]);
    let position7 = xy.concat([ex1Layer7]);
  
    window.requestAnimationFrame(function(){ //requestAnimationFrame is a way of calling an animation, in this case "transformElement"
      transformElement(ex1Layer, position);
    });
    window.requestAnimationFrame(function () {
      transformElement(ex1Layer2, position2);
    })
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer3, position3);
    })
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer4, position4);
    })
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer5, position5);
    })
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer6, position6);
    })
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer7, position7);
    })
  };

  // vertical move
  function transformVertically(x,  el) {
    let box = el.getBoundingClientRect();
    let calcX = (x - box.x - (box.height / 2)) / verticalConstain;
    return "translate3d("+ calcX * 40 +"px, 0 , 0) ";
  }
  

verticalContainer.onmousemove = function(e){
    let x = [e.clientX];
    let verticalPosition = x.concat([verticalImg]);

    window.requestAnimationFrame(function () {
        transformElementVertically(verticalImg, verticalPosition);
      }) 
  }

function transformElementVertically(el,  xyEl) {
    el.style.transform  = transformVertically.apply(null, xyEl);
}

   


//  the sorcery to change rotation direction of the logo

var lastScrollTop = 0;



// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
    logoslow.classList.replace("animate-spin-slow", "animate-spin-slow-reverse");
    logoslower.classList.replace("animate-spin-slower", "animate-spin-slower-reverse");
 } else {
  logoslow.classList.replace("animate-spin-slow-reverse", "animate-spin-slow");
  logoslower.classList.replace("animate-spin-slower-reverse", "animate-spin-slower");
 }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


// stuff related to three

parent_1.onmouseover = function () {
    child_1.style.transform = "translate3d(0,-50%,0)";
    backcolor_1.style.transform = "translate3d(0,300%,0)";
    corehide.style.opacity = "0";
    body.style.backgroundColor = "rgba(222,183,153,255)";
    backcolor_1.style.backgroundColor="rgba(222,183,153,255)";
    backcolor_2.style.backgroundColor="rgba(222,183,153,255)";
    backcolor_3.style.backgroundColor="rgba(222,183,153,255)";
  }
  
parent_1.onmouseout = function () {
    child_1.style.transform = "translate3d(0,0,0)";
    backcolor_1.style.transform = "translate3d(0,0,0)";
    corehide.style.opacity = "1";
  }


parent_2.onmouseover = function () {
    child_2.style.transform = "translate3d(0,-50%,0)";
    backcolor_2.style.transform = "translate3d(0,300%,0)";
    body.style.backgroundColor = "rgba(200,159,103,255)";
    backcolor_1.style.backgroundColor="rgba(200,159,103,255)";
    backcolor_2.style.backgroundColor="rgba(200,159,103,255)";
    backcolor_3.style.backgroundColor="rgba(200,159,103,255)";
  }
  
parent_2.onmouseout = function () {
    child_2.style.transform = "translate3d(0,0,0)";
    backcolor_2.style.transform = "translate3d(0,0,0)";
  }  

parent_3.onmouseover = function () {

    child_3.style.transform = "translate3d(0,-50%,0)";
    backcolor_3.style.transform = "translate3d(0,300%,0)";
    body.style.backgroundColor = "rgba(181,150,158,255)";
    backcolor_1.style.backgroundColor="rgba(181,150,158,255)";
    backcolor_2.style.backgroundColor="rgba(181,150,158,255)";
    backcolor_3.style.backgroundColor="rgba(181,150,158,255)";
  }
  
parent_3.onmouseout = function () {

    child_3.style.transform = "translate3d(0,0,0)";
    backcolor_3.style.transform = "translate3d(0,0,0)";
  }

// white vertical move

function transformVerticallywhite(y,  el) {
  let box = el.getBoundingClientRect();
  
  if (el.classList.contains("white-img-2")) {
    let calcY = (y - box.y - (box.height / 2)) / 150;
    return "translate3d( 0," + calcY * 40 +"px, 0) ";
  }
  else{
    let calcY = (y - box.y - (box.height / 2)) / whiteContrain;
    return "translate3d( 0," + calcY *40 +"px, 0) ";
  }
  
}


white_container.onmousemove = function(e){
  let y = [e.clientY];
  let whiteverticalPosition_1 = y.concat([white_img_1]);
  let whiteverticalPosition_2 = y.concat([white_img_2]);
  window.requestAnimationFrame(function () {
      transformElementVerticallywhite(white_img_1, whiteverticalPosition_1);
    })

    window.requestAnimationFrame(function () {
      transformElementVerticallywhite(white_img_2, whiteverticalPosition_2);
    })  
     
}

function transformElementVerticallywhite(el,  xyEl) {
  el.style.transform  = transformVerticallywhite.apply(null, xyEl);
}

// messing with colors and z-indexes 

// l1
function l1mouseover(){
  applyExcept(l1);
  lb.style.color = "white";
  white_container.style.backgroundColor = "rgba(195,207,188,255)";
  white_img_1.src = "img/white1-a.webp";
  white_img_2.src = "img/white1-b.webp";
  white_vert_1.style.opacity = "1";
  white_vert_2.style.opacity = "1";
  l1.style.zIndex = "2";
  white_vert_1.style.zIndex = "1";
  white_vert_2.style.zIndex = "1";

}

function l1mouseout(){
  removeExcept(l1);
  lb.style.color = "black";
  white_container.style.backgroundColor = "white";
  white_vert_1.style.opacity = "0";
  white_vert_2.style.opacity = "0";
  l1.style.zIndex = "0";
  white_vert_1.style.zIndex = "-1";
  white_vert_2.style.zIndex = "-1";
}



// l2
function l2mouseover(){
  applyExcept(l2);
  l1.classList.add('odd');
  lb.style.color = "white";
  white_container.style.backgroundColor = "rgba(222,183,153,255)";
  white_img_1.src = "img/white2-a.webp";
  white_img_2.src = "img/white2-b.webp";
  white_vert_1.style.opacity = "1";
  white_vert_2.style.opacity = "1";
  l2.style.zIndex = "2";
  white_vert_1.style.zIndex = "1";
  white_vert_2.style.zIndex = "1";

}

function l2mouseout(){
  removeExcept(l2);
  lb.style.color = "black";
  white_container.style.backgroundColor = "white";
  white_vert_1.style.opacity = "0";
  white_vert_2.style.opacity = "0";
  l2.style.zIndex = "0";
  white_vert_1.style.zIndex = "-1";
  white_vert_2.style.zIndex = "-1";
 
}

// l3

function l3mouseover(){
  applyExcept(l3);
  lb.style.color = "white";
  white_container.style.backgroundColor = "rgba(200,159,103,255)";
  white_img_1.src = "img/white3-a.webp";
  white_img_2.src = "img/white3-b.webp";
  white_vert_1.style.opacity = "1";
  white_vert_2.style.opacity = "1";
  l3.style.zIndex = "2";
  white_vert_1.style.zIndex = "1";
  white_vert_2.style.zIndex = "1";

}

function l3mouseout(){
  removeExcept(l3);
  lb.style.color = "black";
  white_container.style.backgroundColor = "white";
  white_vert_1.style.opacity = "0";
  white_vert_2.style.opacity = "0";
  l3.style.zIndex = "0";
  white_vert_1.style.zIndex = "-1";
  white_vert_2.style.zIndex = "-1";
 
}

// l4

function l4mouseover(){
  applyExcept(l4);
  lb.style.color = "white";
  white_container.style.backgroundColor = "rgba(181,150,158,255)";
  white_img_1.src = "img/white4-a.webp";
  white_img_2.src = "img/white4-b.webp";
  white_vert_1.style.opacity = "1";
  white_vert_2.style.opacity = "1";
  l4.style.zIndex = "2";
  white_vert_1.style.zIndex = "1";
  white_vert_2.style.zIndex = "1";

}

function l4mouseout(){
  removeExcept(l4);
  lb.style.color = "black";
  white_container.style.backgroundColor = "white";
  white_vert_1.style.opacity = "0";
  white_vert_2.style.opacity = "0";
  l4.style.zIndex = "0";
  white_vert_1.style.zIndex = "-1";
  white_vert_2.style.zIndex = "-1";
 
}

// l5

function l5mouseover(){
  applyExcept(l5);
  lb.style.color = "white";
  white_container.style.backgroundColor = "rgba(195,207,188,255)";
  white_img_1.src = "img/white5-a.webp";
  white_img_2.src = "img/white5-b.webp";
  white_vert_1.style.opacity = "1";
  white_vert_2.style.opacity = "1";
  l5.style.zIndex = "2";
  white_vert_1.style.zIndex = "1";
  white_vert_2.style.zIndex = "1";

}

function l5mouseout(){
  removeExcept(l5);
  lb.style.color = "black";
  white_container.style.backgroundColor = "white";
  white_vert_1.style.opacity = "0";
  white_vert_2.style.opacity = "0";
  l5.style.zIndex = "0";
  white_vert_1.style.zIndex = "-1";
  white_vert_2.style.zIndex = "-1";
 
}


function applyExcept(exception) {
  let basket = [l1,l2,l3,l4,l5];
  for (let index = 0; index < basket.length; index++) {
    const item = basket[index];
    if (item == exception) {
      continue;
    }
    else{
      item.classList.add('odd');
    }
    
  }
}

function removeExcept(exception) {
  let basket = [l1,l2,l3,l4,l5];
  for (let index = 0; index < basket.length; index++) {
    const item = basket[index];
    if (item == exception) {
      continue;
    }
    else{
      item.classList.remove('odd');
    }
    
  }

}

// slidershow


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  simulateTouch:false,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next ',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// stuff related to slideshow_2
function pretextchange() {
  text_animation_other.classList.remove('animate__animated', 'animate__fadeInUp');
  slidewrapper_other.style.transform = "translateX(0)"
  document.querySelector('.ctext-1-other').innerHTML = "Books";
  document.querySelector('.ctext-2-other').innerHTML = "Stock Story Telling — Proudly presenting our bookcase, with our own book “Dutch Interiors” and all contributed books.<br><br><br>";
  document.querySelector('.ctext-3-other').innerHTML = "Veiw Books";
  document.querySelector('.books-border').classList.replace('border-opacity-0', 'border-opacity-100');
  document.querySelector('.magazines-border').classList.replace('border-opacity-100', 'border-opacity-0');
  text_animation_other.classList.add('animate__animated', 'animate__fadeInDown');
}
pretextchange();


function slidemoveleft() {
  text_animation.classList.remove('animate__animated', 'animate__fadeInUp');
  slidewrapper.style.transform = "translateX(0)"
  document.querySelector('.ctext-1').innerHTML = "Books";
  document.querySelector('.ctext-2').innerHTML = "Veiw Books";
  text_animation.classList.add('animate__animated', 'animate__fadeInDown');
}

function slidemoveright() {
  slidewrapper.style.transform = "translateX(-50%)"
  document.querySelector('.ctext-1').innerHTML = "Magazines";
  document.querySelector('.ctext-2').innerHTML = "Veiw Magazines";
  text_animation.classList.add('animate__animated', 'animate__fadeInUp');


}

function slidemoveleftonother() {
  text_animation_other.classList.remove('animate__animated', 'animate__fadeInUp');
  slidewrapper_other.style.transform = "translateX(0)"
  document.querySelector('.ctext-1-other').innerHTML = "Books";
  document.querySelector('.ctext-2-other').innerHTML = "Stock Story Telling — Proudly presenting our bookcase, with our own book “Dutch Interiors” and all contributed books.<br><br><br>";
  document.querySelector('.ctext-3-other').innerHTML = "Veiw Books";
  document.querySelector('.books-border').classList.replace('border-opacity-0', 'border-opacity-100');
  document.querySelector('.magazines-border').classList.replace('border-opacity-100', 'border-opacity-0');
  text_animation_other.classList.add('animate__animated', 'animate__fadeInDown');
  slideshow_2.style.backgroundColor = "rgba(222,183,153,255)";
}

function slidemoverightonother() {
  slidewrapper_other.style.transform = "translateX(-60%)"
  document.querySelector('.ctext-1-other').innerHTML = "Magazines";
  document.querySelector('.ctext-2-other').innerHTML = "A selection of the national and international magazines with interviews and photos of our work; from Elle Decoration to Residence, we are humbled and proud to be a source of inspiration to interior lovers all over the world.<br>";
  document.querySelector('.ctext-3-other').innerHTML = "Veiw Magazines";
  document.querySelector('.magazines-border').classList.replace('border-opacity-0', 'border-opacity-100');
  document.querySelector('.books-border').classList.replace('border-opacity-100', 'border-opacity-0');
  text_animation_other.classList.add('animate__animated', 'animate__fadeInUp');
  slideshow_2.style.backgroundColor = "rgba(200,159,103,255)";


}

// stuff related to parallax image
// let framepos = document.querySelector('.img-frame').getBoundingClientRect();



// function onresizeimg() {
//   let framepos = document.querySelector('.img-frame').getBoundingClientRect();
//   let scrollTop = window.pageYOffset || document.querySelector('.img-frame').scrollTop;
//   let newval = scrollTop + framepos.y;
//   window.addEventListener('scroll', function () {
  
//     let value = window.scrollY - newval;
//     parallax_img.style.transform = "scale(1.1) translate3d(0," + value * 0.01 +"% , 0)";
   
//   //  parallax_img.style.top = value*0.1 -550 + "px";
//   })
  

// }
// window.onresize = onresizeimg;

// let scrollTop = window.pageYOffset || document.querySelector('.img-frame').scrollTop;
// let newval = scrollTop + framepos.y
// window.addEventListener('scroll', function () {
  
//   let value = window.scrollY - newval;
//   parallax_img.style.transform = "scale(1.1) translate3d(0," + value * 0.05 +"% , 0)";
 
// //  parallax_img.style.top = value*0.1 -550 + "px";
// })


// other

// // stuff related to parallax image
// let frameposo = document.querySelector('.img-frame-other').getBoundingClientRect();
// let scrollTopo = window.pageYOffset || document.querySelector('.img-frame').scrollTop;
// let newvalo = scrollTop + framepos.y
// window.addEventListener('scroll', function () {
  
//   let valueo = window.scrollY - newval;
//   parallax_img_other.style.transform = "scale(1.1) translate3d(0," + valueo * 0.05 +"% , 0)";
 
// //  parallax_img.style.top = value*0.1 -550 + "px";
// })





