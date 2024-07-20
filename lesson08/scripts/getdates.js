/*get current year || date document was modified*/

/*current year*/
let currentYear = '2024'
const yearElement = document.querySelector('#year');
yearElement.textContent = `${currentYear}`;

/*last modified*/

const modifiedElement = document.getElementById("lastModified");
modifiedElement.textContent = document.lastModified;