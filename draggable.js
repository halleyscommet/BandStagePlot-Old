$(function() {
    // Make the elements draggable
    $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable")
        .draggable()
        .dblclick(function(event) {
            // Clone the element on double click
            var $clone = $(this).clone();
            
            // Set the clone's position to be offset from the original element
            $clone.offset({
                top: event.pageY - 20,
                left: event.pageX - 20
            });
            
            // Make the clone draggable
            $clone.draggable();
            
            // Add the clone to the page
            $(this).after($clone);
        });
});

function resetPosition() {
    // Reset the position of the elements
    $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable")
        .css({top: 0, left: 0});
}

$(function() {
    // Make the elements draggable
    $("#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable")
        .draggable()
        .dblclick(function(event) {
            // Clone the element on double click
            var $clone = $(this).clone();
            
            // Set the clone's position to be offset from the original element
            $clone.offset({
                top: event.pageY - 20,
                left: event.pageX - 20
            });
            
            // Make the clone draggable
            $clone.draggable();
            
            // Add the clone to the page
            $(this).after($clone);
        });
});

$("#trash-can").droppable({
  accept: "#drum-draggable, #e-guitar-draggable, #b-guitar-draggable, #microphone-stand-draggable, #singer-draggable, #g-amp-draggable, #b-amp-draggable, #p-board-draggable",
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});