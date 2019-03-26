function mostrar(){
var id = document.getElementById("id");
alert(id);

$.ajax(
{
  url : ‘https://jsonplaceholder.typicode.com/comments?postId=1’,
  type: "POST",
  data : {id}
})

  .done(function(data) {
    $("#respuesta").html(data);
  })
  .fail(function(data) {
    alert( "error" );
  })
  .always(function(data) {
    alert( "complete" );
  });

}
