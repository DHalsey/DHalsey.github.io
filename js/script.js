var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("img-expand");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");


//Initialises onclick functions for all expanding images
for (var i =0; i<img.length; i++){
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

//Close the modal if clicked outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
span.onclick = function() {
  modal.style.display = "none";
}

