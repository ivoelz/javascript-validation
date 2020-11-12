$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
            {
                 required: true,
                digits: false
            },
            grade:
            {
                required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
            {
                required: "Please enter your first name.",
                digits: "Your name cannot contain numbers."
            },
            grade:
            {
                Required: "Please enter your grade.",
                min: "Too low, your number should be above 4",
                max: "Too high, your number should be below 9",
                digits: "Wrong, whole numbers only"
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text(`You have successfully registered ${name} for grade ${grade} camp.`);

    }
});