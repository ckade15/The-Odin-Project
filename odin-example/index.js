// HTML Document that is renderec entirely through JavaScript

const body = document.querySelector('body');

const p = document.createElement('p');
p.innerHTML = "Hey I'm red!";
p.setAttribute('style', 'color: red');
body.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue H3!";
h3.style.cssText = 'color: blue';
body.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border: solid 2px black; background-color: pink;';
body.appendChild(div);

const h1 = document.createElement('h1');
h1.innerText = "I'm in a div!";
div.appendChild(h1);

const p2 = document.createElement('p');
p2.innerText = 'ME TOO!';
div.appendChild(p2);