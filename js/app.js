// from sightingData.js
var tableData = sightingData;

// Display the array in console
console.log(tableData);

// Select the submit button
var filterButton = d3.select("#search-btn");

filterButton.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  console.log("hello");

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputDate.property("value");

  console.log(inputValue);
  console.log(tableData);

  var tbody = d3.select("tbody");
  tbody.html(' ')

  // Loop Through `sightingData` and append table, adds new rows for new sightings
  tableData.forEach(function(sightingReport) {
      if (inputValue == sightingReport.datetime) {
          var newSighting = tbody.append("tr")
          newSighting.append("td").text(sightingReport.datetime);
          newSighting.append("td").text(sightingReport.city);
          newSighting.append("td").text(sightingReport.state);
          newSighting.append("td").text(sightingReport.country);
          newSighting.append("td").text(sightingReport.shape);
          newSighting.append("td").text(sightingReport.durationMinutes);
          newSighting.append("td").text(sightingReport.comments);
      } else { return "No sighting for that date"};
      
  });
});

















