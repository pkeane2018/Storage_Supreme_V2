$(document).ready(function() {

  $(".submit").click(function(event){

    event.preventDefault();

    var update = {

      id : $(this).parent()[0].elements[0].value,
      buyer: $(this).parent()[0].elements[1].value,
      material: $(this).parent()[0].elements[2].value,
      quantity: $(this).parent()[0].elements[3].value,

    };

  console.log(update);

  });

  $.ajax({
    method: "PUT",
    url: "/api/update",
    data: update
  });

});

