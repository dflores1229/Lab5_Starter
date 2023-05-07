// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synthesizer = window.speechSynthesis;
  const voicesOptions = [];


  const Img = document.querySelector("img");
  const voiceSelector = document.getElementById("voice-select");
  const textInput = document.querySelector("text-to-speak");
  const playButton = document.querySelector("button");

  populateVoiceList();
  if( speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener("click", readText)


  function populateVoiceList(){
    voicesOptions = synthesizer.getVoices();

    for(let i=0; i< voicesOptions.length; i++){
      const newVoice = document.createElement("option")
      newVoice.textContent = '${voicesOptions[i].name} (${voicesOptions.lang})';

      if( voicesOptions[i].default){
        newVoice.textContent += "- DEFAULT";
      }

      newVoice.setAttribute("data-lang", voicesOptions[i].lang);
      newVoice.setAttribute("data-name", voicesOptions[i].name);
      voiceSelector.appendChild(newVoice);
    }

  }

  function readText(){
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const optionSelected = 
      voiceSelector.selectedOptions[0].getAttribute("data-name");
    utterance.voice = optionSelected;
    synthesizer.speak(utterance);

    utterance.addEventListener("start", ()=>{
      Img.src = "assets/images/smiling-open.png";
      Img.alt="smiling face with open mouth";
    });

    utterance.addEventListener("end", ()=>{
      Img.src= "assets/images/smiling.png";
      Img.alt="smiling face with closed mouth";
    });
    
  }

}

  /*function animateFace(){
    while( speechSynthesis.speaking ){
      Img.src="assets/images/smiling-open.png";
      //Img.src="assets/images/smiling.png";
    }
  }*/