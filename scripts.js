var slider = document.getElementById("myRange");
var output = document.getElementById("BPM");
var button = document.getElementById("playbutton");
let beat = new Audio("tick.mp3");
var playing = false;
var delay = 0;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(output.innerHTML)
}

button.onclick = function() {
  if(playing){
    playing = false;

  }
  else{
    playing = true;
    console.log("play");
    playSound()

  }
  console.log("button press")

  if(button.value === "Play"){
    button.value = "Pause";
  }
  else{
    button.value = "Play"
  }

  //beat.play()
}

function playSound(){
  delay = 60000/(parseInt(BPM.innerHTML))
  console.log(delay)
  if(playing){
    beat.play()
    setTimeout(() => {  playSound() }, delay);
  }
}