function toggleMenu(){

  document
    .getElementById("nav-links")
    .classList.toggle("active");

}

/* TYPING EFFECT */

const text =
"Full Stack Developer & AI Enthusiast";

let index = 0;

function typeText(){

  if(index < text.length){

    document
      .getElementById("typing")
      .innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText,100);

  }

}

typeText();