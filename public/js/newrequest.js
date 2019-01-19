$(document).ready(function () {

    $(document).on("#submit", newRequest);

    function newRequest() {

        event.preventDefault();

        var request = {

            projectName : $("#project-name").val().trim(),
            requestorName : $("#requestor-name").val().trim(),
            materialDescription : $("#material").val().trim(),
            quantity : $("#quantity").val().trim(),
            needByDate : $("#need-by-date").val().trim()
        };

        console.log(request);

        $.post("api/requests", request);

        $(".form-control").val("");
    }

});
