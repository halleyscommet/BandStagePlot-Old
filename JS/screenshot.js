function capture() {
    html2canvas(document.body).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'stage.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}