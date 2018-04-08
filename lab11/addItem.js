$(function(){
  //document ready my boi
  alert("war ready");

  $('#searchform').submit(function(){
    addItemToList("example item");
    return false;
  });
});

function addItemToList (item){
  $('#results').append("<li>" +item+ "</li>");
}
