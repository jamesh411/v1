$(document).ready(function() {

  $("#b-home").click(function(){
    $(".page").hide("slow");
    $("#home").show("slow");
    $("#b-about").css("color", "#444444");
    $("#b-work").css("color", "#444444");
    $("#b-home").css("color", "#8fb5bf");
  });

  $("#b-about, #jam").click(function(){
    $(".page").hide("slow");
    $("#about").show("slow");
    $("#b-home").css("color", "#444444");
    $("#b-work").css("color", "#444444");
    $("#b-about").css("color", "#8fb5bf");
  });

  $("#b-work, #backpack").click(function(){
    $(".page").hide("slow");
    $("#work").show("slow");
    $("#b-home").css("color", "#444444");
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
