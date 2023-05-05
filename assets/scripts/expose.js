// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById('horn-select');
  const hornImg = document.querySelectorAll("img")[0];
  const hornAudio = document.querySelector("audio");

  const volumeSlider = document.getElementById("volume");
  const volImg = document.querySelectorAll("img")[1];

  const playButton = document.querySelector("button");
  
  hornSelector.addEventListener( "change", changeHorn);
  volumeSlider.addEventListener("input", changeVol);
  playButton.addEventListener("click", playAudio);
  

  function changeHorn(){
    if( hornSelector.value === "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3"
      hornImg.alt = "air horn image";
    }
    else if( hornSelector.value === "car-horn"){
      hornImg.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3" 
      img.alt = "car horn image";
    }
    else if( hornSelector.value === "party-horn"){
      hornImg.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3"
      img.alt = "party horn image";
    }
    else{
      hornImg.src = "assets/images/no-image.svg";
      img.alt = "no image displayed";
    }
  }

  function changeVol(){
    let val = volumeSlider.value;
    hornAudio.volume = val/100;

    if( 1 <= val && val < 33){
      volImg.src = "assets/icons/volume-level-1.svg";
      img.alt = "volume level 1";
    }
    else if( val < 67){
      volImg.src = "assets/icons/volume-level-2.svg";
      img.alt = "volume level 2";
    }
    else if( 66 < val){
      volImg.src = "assets/icons/volume-level-3.svg";
      img.alt = "volume level 3";
    }
    else{
      volImg.src = "assets/icons/volume-level-0.svg";
      img.alt = "no volume";
    }
  }

  function playAudio(){
    hornAudio.play();

    //add confetti when chose party horn
    if( hornSelector.value === "party-horn"){
      const confetti = new JSConfetti();

      confetti.addConfetti();
    }
  }

}

