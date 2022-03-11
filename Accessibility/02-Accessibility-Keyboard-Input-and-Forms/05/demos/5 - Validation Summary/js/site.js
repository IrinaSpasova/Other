$(document).ready(function () {
    $("#btnSubmit").click(function () {
        clearAllErrors();

        if ($("#name").val() == "") {
            showError($("#name"), "Name is a required field");
        }
        if ($("#email").val() == "") {
            showError($("#email"), "Email address is a required field");
        }
        if ($("#dob").val() == "") {
            showError($("#dob"), "Date of birth is a required field");
        }
        else {
            var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/
            if (!regex.test($("#dob").val())) {
                showError($("#dob"), "Date of birth not in correct format");
            }
        }
        if ($("#retreat").val() == "") {
            showError($("#retreat"), "Retreat is a required field");
        }
        return false;
    });
});

function clearAllErrors() {
    $(".form-control").removeClass("invalid");
    $(".form-control").attr("aria-invalid", null);
    $(".form-control").attr("aria-describedby", null);
    $(".error-message").remove();
    $("#validation-summary").html("").css("border-width", "0");
}

function showError(input, error) {
    input.addClass("invalid");
    input.attr("aria-invalid", "true");
    input.after($("<span id='" + input.attr("id") + "-error' class='error-message'>" + error + "</span>"));
    input.attr("aria-describedby", input.attr("id") + "-error");

    if ($("#validation-summary").html().length == 0) {
        $("#validation-summary").append("<p>There were some issues with the form submission:</p>");
        $("#validation-summary").focus();
    }

    $("#validation-summary").append("<a href='#" + input.attr("id") + "'>" + error + "</a>").css("border-width", "1px");
}