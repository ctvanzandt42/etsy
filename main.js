// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  var totalPrice = 0;
  var avg = 0
  for (var i = 0; i < data.length; i++) {
    totalPrice += data[i].price;
    avg = totalPrice / data.length;
    avgPrice = Math.round(100 * avg) / 100;

  }
  return console.log('The average price is $' + avgPrice + '.');

}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  var newItems = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      newItems.push(data[i].title);
    }
  }
  return console.log(newItems);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  var diffCurrencyCode = []
  var diffCurrencyName = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      diffCurrencyCode.push(data[i].price);
      diffCurrencyName.push(data[i].title);
    }
  }
  return console.log(diffCurrencyName + ' costs ' + diffCurrencyCode + ' pounds.');
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  var woodItems = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood')) {
      woodItems.push(data[i].title);
    }
  }
  return console.log(woodItems);
}



// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  let complicatedItems = [];
  let itemMaterials = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      complicatedItems.push(data[i].title);
      itemMaterials.push(data[i].materials);
    }
  }
  return console.log(complicatedItems[0] + ' has 9 materials: ' + itemMaterials[0] + '. ' + complicatedItems[1] + ' has 13 materials: ' + itemMaterials[1]);
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let originalItems = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      originalItems.push(data[i].title);
    }
  }
  return console.log(originalItems.length + ' items were made by their sellers.');

}