'use strict';
// Objectives:
//  1.)
//  2.)Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
//  1.)
//  1.)
//  1.)
//  1.)



let allProducts = [];
let maxVote = 25;
let imgContainer = document.getElementById('imgContainer');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let products = ['bag','banana','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','tauntaun','unicorn','water-can','wine-glass','sweep'];

// Constructor function to creat a new product and push that product into the allProducts array

function Product(name, fileExt = 'jpg'){
  this.name = name;
  this.filePath = `img/${name}.${fileExt}`;
  this.timesShown = 0;
  this.timesVoted = 0;
  allProducts.push(this);
}

// Helper functions that perform actions necessary to  create products, generate a random image using a random index of the products array, and renders that image
// createProduct: Loops through product array to create an object for each value
function createProductObjects(){
  for(let i=0; i<products.length; i++){
    new Product(products[i]);
    if(allProducts[i].name === 'sweep'){
      allProducts[i].filePath = `img/${allProducts[i].name}.png`;
    }
  }
}

function getRandomIndex(){
  return Math.floor(Math.random()*(products.length - 0) +0);
}
function renderImg(){

}
// Creates new products
createProductObjects();
getRandomIndex();
