$(document).ready(function() {

    $(".submit").click(function(){

      var test = $(this).parent().elements.namedItem("assigned-buyer").val();
      console.log(test);
    })

});

<script>

$(document).ready(function() {

    $(".submit").click(function(event){

      event.preventDefault();

      var stuff = ("#form1").elements["assigned-buyer"].val()
      {{!-- var things = stuff.elements["assigned-buyer"].val(); --}}
      console.log($(this).parent().attr("id"));
      console.log(stuff);
    })

});

</script>