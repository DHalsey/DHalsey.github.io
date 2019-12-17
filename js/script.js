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
if(span){span.onclick = function() {
  modal.style.display = "none";
}}

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(){
            var bottom_of_element = $(this).offset().top + $(window).height(); /*+ $(this).outerHeight()/4;*/
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).css("opacity", 1);
                //$(this).css("margin-top", '0px');
            } else{
                $(this).css("opacity",0);
                //$(this).css("margin-top", '100px');
            }
        }); 
    });
});

$(document).ready(function() {
    $('.fade').each( function(){
        var bottom_of_element = $(this).offset().top + $(window).height()/5;/*$(this).outerHeight()/4;*/
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
            $(this).css("opacity", 1);
                //$(this).css("margin-top", '0px');
        } else{
            $(this).css("opacity",0);
            //$(this).css("margin-top", '100px');
         }
    }); 
});

$(".icon-click-background").mouseover(function(){
    $(this).next().css("clip-path", "circle(" + 100 + "% at center)");
    $(this).next().parent().parent().css("transform", "scale(1.2)");
});
$(".icon-click-background").mouseout(function(){
    $(this).next().css("clip-path", "circle(" + 0 + "% at center)");
    $(this).next().parent().parent().css("transform", "scale(1)");
});