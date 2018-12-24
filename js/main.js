$(document).ready(function() {

  $("#home-button").click(function(){
    $("#about").hide("slow");
    $("#work").hide("slow");
    $("#home").show("slow");
    $("#about-button").css("color", "#444444");
    $("#work-button").css("color", "#444444");
    $("#home-button").css("color", "#8fb5bf");
  });

  $("#about-button, #jam").click(function(){
    $("#home").hide("slow");
    $("#work").hide("slow");
    $("#about").show("slow");
    $("#home-button").css("color", "#444444");
    $("#work-button").css("color", "#444444");
    $("#about-button").css("color", "#8fb5bf");
  });

  $("#work-button, #backpack").click(function(){
    $("#home").hide("slow");
    $("#about").hide("slow");
    $("#work").show("slow");
    $("#home-button").css("color", "#444444");
    $("#about-button").css("color", "#444444");
    $("#work-button").css("color", "#8fb5bf");
  });
});
