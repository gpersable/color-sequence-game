// help modal

$(document).ready(function(){
  $("#modalBtn").click(function(){
    $("#modal").fadeIn("fast");
  });

  $(".close").click(function() {
    $("#modal").fadeOut("fast");
  });
});

$(document).click(function(event) {
  if ($(event.target).is("#modal")) {
    $("#modal").fadeOut("fast");
  }
});
