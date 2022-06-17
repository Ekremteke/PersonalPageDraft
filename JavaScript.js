var links, name2;
links = ['https://www.google.co.uk/', 'https://www.amazon.co.uk/', 'https://www.youtube.com/'];
name2 = ['Google', 'Amazon', 'Youtube'];
let element_linklist = document.getElementById('linklist');
while (!!name2.length) {
 if(--window.LoopTrap <= 0) throw "Infinite loop.";
 let new_li = document.createElement('li');
 let new_a = document.createElement('a');
 new_a.innerText = name2.shift();
 new_a.setAttribute("href", links.shift());

 new_li.appendChild(new_a);

 element_linklist.appendChild(new_li);
}

var array;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


array = [];


document.getElementById('add_button').addEventListener('click', (event) => {
  array.push(getNumberOrString(document.getElementById('names').value));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('names').value);

  element_list.appendChild(new_li);

});

document.getElementById('facilitator_button').addEventListener('click', (event) => {
  let element_display = document.getElementById('display');
  let new_li2 = document.createElement('li');
  new_li2.innerText = randomMember(array);

  element_display.appendChild(new_li2);

});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} 
var arrayh1, storage;


let element_hobbies = document.getElementById('hobbies');
element_hobbies.setAttribute("src", 'https://i.ibb.co/WvkNM8m/swimming.jpg');
arrayh1 = [];
arrayh1.push('https://i.ibb.co/1d7GFgm/cycyling-1-640x360-credit-shutterstock.jpg');
arrayh1.push('https://i.ibb.co/S72hXRX/image-result-for-driving-1.jpg');
arrayh1.push('https://i.ibb.co/3sV7htb/baglama.jpg');
arrayh1.push('https://i.ibb.co/WvkNM8m/swimming.jpg');


document.getElementById('hobbies').addEventListener('click', (event) => {
  let element_hobbies2 = document.getElementById('hobbies');
  storage = arrayh1.shift();
  element_hobbies2.setAttribute("src", storage);
  arrayh1.push(storage);

});