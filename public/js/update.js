$(document).ready(function () {

    $("#submit").click(function () {

        var update = {
            deliverydate: $("#confirmed-delivery-date").val().trim(),
            dateordered: $("#date-ordered").val().trim()

        };

        $.put("api/update", update);

    });

})