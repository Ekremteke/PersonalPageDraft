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