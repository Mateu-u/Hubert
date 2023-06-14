//Scroll to bottom
const scrollButton = document.querySelector('.scroll-button');
const Audio = document.getElementById('PlayAudio');

scrollButton.addEventListener('click', function() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest'});
  Audio.play();
});

//Scroll to top
const topscrollButton = document.getElementById("scroll-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    topscrollButton.style.display = "block";
  } else {
    topscrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Yes = document.querySelector('.autor');

Yes.addEventListener('click', ()=> {
  
})

const HiButton = document.getElementById('autor');

HiButton.addEventListener('click',()=> {
  open('images/Izak911.jpg');
})
