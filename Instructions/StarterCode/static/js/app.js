// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the weather data from data.js
// console.log(data);


// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(UFOdata) {
//   console.log(UFOdata);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(UFOdata) {
//   console.log(UFOdata);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(UFOdata) {
//   console.log(UFOdata);
//   var row = tbody.append("tr");

//   Object.entries(UFOdata).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
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

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(UFOdata) {
//   console.log(UFOdata);
  var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


//****/ weatherReport = UFOdata *****

// data.forEach(function(tabledata) {
//     console.log(tabledata);
//     var row = tbody.append("tr")
//     row.append("td").text(UFOdata.datetime)
//     row.append("td").text(UFOdata.city)
//     row.append("td").text(UFOdata.state)
//     row.append("td").text(UFOdata.country)
//     row.append("td").text(UFOdata.shape)
//     row.append("td").text(UFOdata.durationMinutes)
//     row.append("td").text(UFOdata.comments)

// });

// from data.js


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(tableData);

  var filteredData = tableData.filter((person) => person.datetime === inputValue);

  console.log(filteredData);
  
}

// tbody.text("");

//   var filteredData = data1;
// YOUR CODE HERE!
// Get a reference to the table body


// data1.forEach(function(filteredData) {
//     console.log(filteredData);
//     var row1 = tbody.append("tr");
//     Object.entries(filteredData).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         // in the weather report object
//         var cell1 = row1.append("td");
//         cell1.text(value);
//     });
//     });