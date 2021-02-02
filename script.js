                            //BootStrap Course
var result = document.getElementById('res');
var raedMoreButton = document.getElementById('read-more');
var theRemainText = document.querySelector('.rest-of-the-text');
/*
//console.log(theRemainText.classList);
raedMoreButton.onclick = function () {
    theRemainText.classList.toggle('rest-of-the-text');
}
*/
                        //Our Skills
var talkWithPro_Button = document.querySelector('.talk-with-professional');
talkWithPro_Button.onclick = function () { 
    //location.href = 'https://www.facebook.com/alhassan.ali.7927';
    document.open('https://www.facebook.com/alhassan.ali.7927', '_blank','width=1000, height= 1000, left=0, top=0, menubar=yes, status=yes','falce');
}


                        //Map
var mapMainDiv = document.querySelector('.map');
var mapChildDiv = document.querySelector('.my-map');

mapMainDiv.onmouseover = function (){
    mapMainDiv.childNodes[1].classList.remove('my-map');
   // mapChildDiv.style.display = 'block';
   //Dosen't Work->  mapChildDiv.style.backgroundColor = 'rgba(2, 2, 2, 0.7)';
    mapChildDiv.style.transition = '0.4s all ease-in-out';
}

mapMainDiv.onmouseleave = function () {
    mapMainDiv.childNodes[1].classList.add('my-map');
   // mapChildDiv.style.display = 'none';
}

var locationButton = document.querySelector('.loc-button'); 

locationButton.onclick = function () {
    //location.href = 'https://www.google.com/maps';
    document.open('https://www.google.com/maps', '_blank','width=1000, height= 1000, left=0, top=0, menubar=yes, status=yes','falce');

}

                        //scroll to top

var scrollTopDiv = document.getElementById('scroll-top-top');
var arrowUp = document.getElementById('arrow-up');
var toTopButton = document.getElementById('to-top-button');

window.onscroll = function () {
    scrollToTop();
}

function scrollToTop() {
    if (document.body.scrollTop  < 20 || document.documentElement.scrollTop < 20) {
        scrollTopDiv.style.display = 'block';
    } else {
        scrollTopDiv.style.display = 'none';

    }
}

toTopButton.onclick = function () {
    document.body.scrollTop  = 0;
    document.documentElement.scrollTop = 0;
}
/*
                        //preloader
var loader = document.querySelector('.loader');

window.addEventListener('load', function vanish(){
    loader.classList.add('disappear');

})
*/





























































































































