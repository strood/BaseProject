"use strict";

// Import methods/functionality
import Icon from './img/icon.png';
import Data from './data/data.xml';

import _ from 'lodash';
import myName from './components/myName';
import printMe from './print.js';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function component() {
	const element = document.createElement('div');
	const elementTwo = document.createElement('div');
	const btn = document.createElement('button');
	// Lodash, currently included via a script, is required for this line to work
	// ^ NO LONGER!
	// NOW it is imported by this script using the code on the first line
	element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

	elementTwo.innerHTML = myName('Jesus');

	btn.innerHTML = 'Click me to print to console!';
	btn.onclick = printMe;


	elementTwo.classList.add('hello');

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Icon;

	elementTwo.appendChild(myIcon);
	elementTwo.appendChild(btn);

	console.log(Data);
	// return element;
	return elementTwo;

}

document.body.appendChild(component());


// The coolest part of everything mentioned above, is that loading assets this
// way allows you to group modules and assets in a more intuitive way. Instead of
// relying on a global /assets directory that contains everything, you can group
// assets with the code that uses them. For example, a structure like this can be
// useful:
//
//  |- /assets
//  |– /components
//  |  |– /my-component
//  |  |  |– index.jsx
//  |  |  |– index.css
//  |  |  |– icon.svg
//  |  |  |– img.png

// This setup makes your code a lot more portable as everything that is closely
// coupled now lives together. Let's say you want to use /my-component in another
// project, simply copy or move it into the /components directory over there. As
// long as you've installed any external dependencies and your configuration has
// the same loaders defined, you should be good to go
