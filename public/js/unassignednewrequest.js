$(document).ready(function () {

    $(".save").click(function () {

        var request = {

            buyer = $(this).elements.namedItem("assigned-buyer").val(),
            id = $(this).elements.namedItem(".request-number").val(),

        };

        $.post("api/request/assign", request);

    });

});