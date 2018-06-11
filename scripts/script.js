var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; 
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; 
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};










var controls2 = document.querySelectorAll('.controls2');
for(var i=0; i<controls2.length; i++){
    controls2[i].style.display = 'inline-block';
}

var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2,2000);

function nextSlide2(){
    goToSlide2(currentSlide2+1);
}

function previousSlide2(){
    goToSlide2(currentSlide2-1);
}

function goToSlide2(n){
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (n+slides2.length)%slides2.length;
    slides2[currentSlide2].className = 'slide2 showing2';
}


var playing2 = true;
var pauseButton2 = document.getElementById('pause2');

function pauseSlideshow2(){
    pauseButton2.innerHTML = '&#9658;'; 
    playing2 = false;
    clearInterval(slideInterval);
}

function playSlideshow2(){
    pauseButton2.innerHTML = '&#10074;&#10074;'; 
    playing2 = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton2.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next2 = document.getElementById('next2');
var previous2 = document.getElementById('previous2');

next2.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};