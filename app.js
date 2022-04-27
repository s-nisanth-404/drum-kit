document.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audio === null) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  });
});
