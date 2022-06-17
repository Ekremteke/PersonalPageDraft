var commentList;

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


commentList = [];


document.getElementById('add_button').addEventListener('click', (event) => {
  commentList.push(getNumberOrString(document.getElementById('names').value));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('names').value);

  element_list.appendChild(new_li);

});

document.getElementById('facilitator_button').addEventListener('click', (event) => {
  let element_display = document.getElementById('display');
  let new_li2 = document.createElement('li');
  new_li2.innerText = randomMember(commentList);

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
