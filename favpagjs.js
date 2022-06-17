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