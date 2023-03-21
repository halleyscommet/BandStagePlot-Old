function addImage(){
    let image = document.querySelector('input[type="file"]').files[0];
    let imageName = image.name;
    let allowedTypes = ["png"];
    let imageType = imageName.substring(imageName.lastIndexOf('.') + 1).toLowerCase();
    if(allowedTypes.indexOf(imageType) != -1){
        let reader = new FileReader();
        reader.onload = function(){
            let imageContainer = document.getElementById("import-draggable");
            let newImage = document.createElement("img");
            newImage.setAttribute("src",reader.result);
            newImage.setAttribute("width","250")
            imageContainer.appendChild(newImage);
        }
        reader.readAsDataURL(image);
    }
}