function cambridge() {
  var usSound = document.getElementsByClassName("sound")[1];
  var ukSound = document.getElementsByClassName("sound")[0];
  if (usSound) {
    usSound.click();
  } else if (ukSound) {
    ukSound.click();
  }
}

function cdist() {
  var sound = document.getElementsByClassName("pronun")[0];
  if (sound) {
    sound.click();
  }
}

cambridge();
cdist();