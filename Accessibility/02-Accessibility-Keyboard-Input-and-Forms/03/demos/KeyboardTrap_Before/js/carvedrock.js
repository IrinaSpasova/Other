$(document).ready(function () {
    $(".add-member .btn").click(function () {
        var gender = $("input[type=radio][name=Gender]:checked").val();
        var age = $("input[type=radio][name=Age]:checked").val();

        if (!gender || !age) {
            alert("Please select the gender and age");
        }
        else {
            $(".members").append("<div tabindex='0'>" + gender + ", " + age + "</div>");
        }

    });   
});

$(this).on('keydown', function (event) {
    if (event.key == 'r') {
        $(".members>div:focus").remove();
    } else if (event.key == 'x') {
        $(".members>div").remove();
    } else if (event.key == 'Tab') {
        if ($(".members>div").length > 0 && $(".members>div:focus").index() == $(".members>div:last").index()) {
            $("#btn-add").focus();
            event.preventDefault();
        }
    }
});