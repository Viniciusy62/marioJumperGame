const mario = document.querySelector(".mario");

const jumper = () => {
  mario.classList.toggle("jump");
};

document.addEventListener("keydown", jumper);
