import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Character from './js/character.js';
// import $ from 'jquery'; // $ npm i jquery

window.addEventListener("load", function() {
  document.getElementById("top-left").addEventListener('click', function() {
    console.log("you clicked me");
    let char = document.getElementById("char");
    // char.style.left = "40%";
    // char.style.top = "250px";
    char.setAttribute("class", "move");
    document.getElementById("base").setAttribute("class", "hidden");
    document.getElementById("island").removeAttribute("class");
  });
});
