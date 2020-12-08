// *** NOTE ***
// Code taken from Activity 14-3.03-Evr_D3_Table 

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// // // Console.log the weather data from data.js
// console.log(data);

// // // Step 1: Loop Through `data` and console.log each UFO object
data.forEach(function(UFOdata) {
//   console.log(UFOdata);
});

// // // Step 2:  Use d3 to append one table row `tr` for each UFO object
// // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOdata) {
//   console.log(UFOdata);
  var row = tbody.append("tr");
});

// // // Step 3:  Use `Object.entries` to console.log each UFO value
data.forEach(function(UFOdata) {
//   console.log(UFOdata);
  var row = tbody.append("tr");

  Object.entries(UFOdata).forEach(function([key, value]) {
    // console.log(key, value);
  });
});

// // // Step 4: Use d3 to append 1 cell per UFO value (weekday, date, high, low)
// data.forEach(function(UFOdata) {
//   console.log(UFOdata);
//   var row = tbody.append("tr");

//   Object.entries(UFOdata).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // // Step 5: Use d3 to update each cell's text with
// // // weather report values (weekday, date, high, low)
data.forEach(function(UFOdata) {
//   console.log(UFOdata);
  var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO object
    var cell = row.append("td");
    cell.text(value);
  });
});

//****/ weatherReport = UFOdata *****

// *** NOTE ***
// Code taken from Activity 14-3.09-Par_Form_Filter 

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// tbody.text("");

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter((person) => person.datetime === inputValue);

  console.log(filteredData);

  // *** Use the code from above to display the filter rows on the HTML.***
  //*** Moving Forward, Replace UFOdata with filteredData ****/

  var filteredData = filteredData;

//   // Get a reference to the table body
//   var tbody = d3.select("tbody");

tbody.html("");

// // // Step 2:  Use d3 to append one table row `tr` for each UFO object
// // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
filteredData.forEach(function(filteredData) {
      console.log(filteredData);
      var row = tbody.append("tr");
    });

// // // Step 3:  Use `Object.entries` to console.log each UFO value
filteredData.forEach(function(filteredData) {
      console.log(filteredData);
      var row = tbody.append("tr");
    
      Object.entries(filteredData).forEach(function([key, value]) {
        console.log(key, value);
      });
    });

// // // Step 4: Use d3 to append 1 cell per UFO value (weekday, date, high, low)
// filteredData.forEach(function(filteredData) {
//   console.log(filteredData);
//   var row = tbody.append("tr");

//   Object.entries(filteredData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the filtered data object
//     var cell = row.append("td");
//   });
// });

// // // Step 5: Use d3 to update each cell's text with
filteredData.forEach(function(filteredData) {
    //   console.log(filteredData);
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the UFO object
        var cell = row.append("td");
        cell.text(value);
      });
    });

 }