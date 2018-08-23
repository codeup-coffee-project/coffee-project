"use strict";

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');



console.log(tbody);
// function renderCoffee(coffee) {
//     let html = '<div class="coffee">';
//     html += '<div>' + coffee.id + '</div>';
//     html += '<div>' + coffee.name + '</div>';
//     html += '<div>' + coffee.roast + '</div>';
//     html += '</div>';
//
//     return html;
// }
//
function renderCoffee(coffee) {
    let html = '<div class = "coffee">';
    console.log("in rendercoffee")
    console.log(coffee);
    html += '<div class= "name">' + coffee.name + '<span class= "roasts">' + coffee.roast + '</span></div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i <= coffees.length -1; i++) {
        console.log("In rendercoffees: ")
        console.log(coffees[i]);
	    html += renderCoffee(coffees[i]);
    }
    return html;

}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    console.log(selectedRoast);
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });


tbody.innerHTML= renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// let listItems = document.getElementsByTagName('h3');
// function listCoffeeTypes(coffees) {
//
// 	for (let i = 0; i < listItems.length; i++) {
// 		console.log(listItems[i]);
// 		// input = document.getElementsByTagName('h3');
// 		// console.log(input);
// 		listItems += listCoffeeTypes(coffees[i]);
// 	}
// 	return listItems;

// }
// console.log(listCoffeeTypes());





//
// 	let renderTheCoffee = document.getElementsByTagName("h3");
// 		for (let i = 0; i < renderTheCoffee().length; i++) {
//
//
// 	}
// }
// coffeeListings();





tbody.innerHTML = renderCoffee(coffees);

submitButton.addEventListener('click', updateCoffees);
