$(document).ready(function () {
    $("#btnSubmit").click(function () {
        clearAllErrors();

        if ($("#name").val() == "") {
            showError($("#name"), "This is a required field");
        }
        if ($("#email").val() == "") {
            showError($("#email"), "This is a required field");
        }
        if ($("#dob").val() == "") {
            showError($("#dob"), "This is a required field");
        }
        else {
            var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/
            if (!regex.test($("#dob").val())) {
                showError($("#dob"), "Date not in correct format");
            }
        }
        if ($("#retreat").val() == "") {
            showError($("#retreat"), "This is a required field");
        }
        return false;
    });
});

function clearAllErrors() {
    $(".form-control").removeClass("invalid");
    $(".error-message").remove();
}

function showError(input, error) {
    input.addClass("invalid");
    input.after($("<span class='error-message'>" + error + "</span>"));
}