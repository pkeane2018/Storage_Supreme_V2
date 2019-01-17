$(document).ready(function() {

    $(".submit").click(function(){

      var test = $(this).parent().elements.namedItem("assigned-buyer").val();
      console.log(test);
    })

});

