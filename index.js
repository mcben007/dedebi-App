//creates a div element in the DOM
var div = document.createElement('div');

//sets classname and id to the div element
div.className = 'me';
div.id = 'you';

//sets attribute to the div element
div.setAttribute('title', 'mainContent');

//selecting the container class and h1 element in the DOM
var container = document.querySelector('.container');
var h1 = document.querySelector('h1');
h1.style.backgroundColor = 'goldenrod';
h1.style.color = 'white';

//creates a textnode
var text = document.createTextNode('this is awesome');

//appends the textnode to the h1 element
h1.appendChild(text);


//inserts the div and h1 element after the container class in that order
container.insertBefore(div, h1);

//displays all the changes in the DOM
console.log(container);
