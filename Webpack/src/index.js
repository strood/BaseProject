import "../img/TribeLogo.png"; // Example test for our file-loader module in webpack.common
import "../styles/base.scss";
import './style/reset.css'; //Delete this or normalize css
// import './style/normalize.css';


console.log('Hello - maybe your dev server is working!');
console.log('Add another console.log and it will live update!')

document.body.innerHTML = `<h1>Hello World</h1>`;
