$(document).ready(function(){
  $("#search").click(function(){
    var term = $("#term").val();
    
    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json&callback=?",
      async: false,
      dataType: "json",
      success: function(data){
        for(var i = 0; i < data[1].length; i++){
        $("#output").append("<li><a href= "+ data[3][i]+ ">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert("error!");
      }
    });
    $("#output").empty();
    });
  });
$("#term").keyup(function(x){
      if(x.which == 13)
        $("#search").click();
});