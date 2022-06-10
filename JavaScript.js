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