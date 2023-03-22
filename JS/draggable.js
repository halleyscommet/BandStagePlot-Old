function resetPosition() {
  // Reset the position of the elements
  $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable")
    .css({top: 0, left: 0});
}

$(function() {
  // Make the elements draggable
  $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable")
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
  accept: "#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable, #import-draggable, #piano-draggable, #stage-monitor-draggable",
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});