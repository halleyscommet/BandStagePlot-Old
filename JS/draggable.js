function resetPosition() {
  // Reset the position of the elements
  $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable, #person-draggable, #text-box")
    .css({top: 0, left: 0});
}

$(function() {
  // Make the elements draggable
  $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable, #person-draggable, #text-box")
    .draggable()
    .dblclick(function(event) {
      // Clone the element on double click
      var $clone = $(this).clone();

      // Make the clone draggable
      $clone.draggable();

      // Add the clone to the container
      $("#image-container").append($clone);
    });
});

$("#trash-can").droppable({
  accept: "#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable, #person-draggable, #text-box",
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});

// Function to export the current stage plot as a JSON file
function exportAsJSON() {
  // Get the positions of all the elements
  var positions = [];
  $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable, #person-draggable, #text-box").each(function() {
    var $this = $(this);
    var position = { 
      "id": $this.attr("id"),
      "top": $this.css("top"),
      "left": $this.css("left")
    };
    positions.push(position);
  });

  // Convert the positions to JSON format
  var json = JSON.stringify(positions, null, 2);

  // Create a Blob object with the JSON data
  var blob = new Blob([json], {type: "application/json"});

  // Create a download link for the user
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "stageplot.json");
  document.body.appendChild(link);
  link.click();
}

// Function to import a JSON file and update the page
function importJSON() {
  // Get the file from the input element
  var file = document.getElementById("import-file").files[0];

  // Read the file
  var reader = new FileReader();
  reader.onload = function(e) {
    // Parse the file contents as JSON
    var json = JSON.parse(e.target.result);

    // Loop through the JSON array
    for (var i = 0; i < json.length; i++) {
      // Get the JSON object
      var obj = json[i];

      // Get the element with the corresponding ID
      var el = document.getElementById(obj.id);

      // Update the element with the new position
      el.style.top = obj.top;
      el.style.left = obj.left;
    }
  };
  reader.readAsText(file);
}

// Bind the import function to the button
$("#import-button").on("click", importJSON);