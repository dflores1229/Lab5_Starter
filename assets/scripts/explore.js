// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synthesizer = window.speechSynthesis;

  const Img = document.querySelector("img");
  const voiceSelector = document.getElementById("voice-select");
  const textInput = document.getElementById("text-to-speak");
  const playButton = document.querySelector("button");

  populateVoiceList();
  if( speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  playButton.addEventListener("click", readText); 


  function populateVoiceList(){
    var voicesOptions = synthesizer.getVoices();

    for(let i=0; i< voicesOptions.length; i++){
      const newVoice = document.createElement("option")
      newVoice.textContent = voicesOptions[i].name;
      newVoice.textContent += " ";
      newVoice.textContent += voicesOptions[i].lang;

      newVoice.setAttribute("data-lang", voicesOptions[i].lang);
      newVoice.setAttribute("data-name", voicesOptions[i].name);
      newVoice.setAttribute('value', i);
      voiceSelector.appendChild(newVoice);
    }

  }

  function readText(){
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = synthesizer.getVoices();

    const optionSelected = voices[voiceSelector.value];
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