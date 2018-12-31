$(document).ready(function() {

  var image;

  $('.popup').click(function(){
      image = $(this).clone();
      image.css("display", "none");
      $("#layout").append(image);
      if(window.innerHeight < window.innerWidth){
        if (image.width() > image.height()) {
          image.css("width", "50vw");
        }
        else{
          image.css("height", "75vh");
        }
      }
      else {
        if(image.width() >= image.height()){
          image.css("width", "80vw");
        }
        else{
          image.css("height", "75vh");
        }
      }
      image.css({
        "z-index": "1000",
        "display": "block",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)"
      });
      $("#cover").css("display", 'none').fadeIn("slow");
      image.css("display", 'none').fadeIn("slow");
  });

  $("#cover").click(function(){
    $("#cover").css("display", 'block').fadeOut("slow");
    image.css("display", 'block').fadeOut("slow").empty();
  });

  $("#b-myroom").click(function(){
    $(".page").hide("slow");
    $("#myroom").show("slow");
    $("#b-about").css("color", "#444444");
    $("#b-work").css("color", "#444444");
    $("#b-myroom").css("color", "#8fb5bf");
  });

  $("#b-about, #jam").click(function(){
    $(".page").hide("slow");
    $("#about").show("slow");
    $("#b-myroom").css("color", "#444444");
    $("#b-work").css("color", "#444444");
    $("#b-about").css("color", "#8fb5bf");
  });

  $("#b-work, #backpack").click(function(){
    $(".page").hide("slow");
    $("#work").show("slow");
    $("#b-myroom").css("color", "#444444");
    $("#b-about").css("color", "#444444");
    $("#b-work").css("color", "#8fb5bf");
  });

  $("#p-ethical").click(function(){
    $(".page").hide("slow");
    $("#ethicalapparel").show("slow");
  });

  $("#p-wake").click(function(){
    $(".page").hide("slow");
    $("#wake").show("slow");
  });

  $("#p-splotches").click(function(){
    $(".page").hide("slow");
    $("#splotches").show("slow");
  });

  $("#p-olivejam").click(function(){
    $(".page").hide("slow");
    $("#olivejam").show("slow");
  });

  $("#p-paragoned").click(function(){
    $(".page").hide("slow");
    $("#paragoned").show("slow");
  });

  $("#p-misc").click(function(){
    $(".page").hide("slow");
    $("#misc").show("slow");
  });

  $(".back").click(function(){
    $(".page").hide("slow");
    $("#work").show("slow");
  });

});
