function ValidateFullName() {

    var fName = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;

    if (fName != null && fName != "" && subject != null && subject != "" && isNaN(fName) && isNaN(subject) )
        return true;
    else
        return false;

    // var group = document.getElementById("fName");
    //var tempString = document.getElementById("fName").value;
    //if(group.value == ""){
    //alert("Please enter something as your First Name");
    //return false;
    //}
    //else if (tempString.length > 25)
    //{
    // alert("The name cannot be more than 25 characters");
    //return false;
    //}
    //else if (/[^a-zA-Z\-\]/.test( tempString ))
    //{
    //alert("The name can only contain alphanumeric characters and hypehns(-)")
    //return false;
    //}
    //return true;
}

function ValidateEmail() {
    var email = document.getElementById("email").value;

    if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0)
        return true;
    else
        return false;
}

function ValidateAllForms() {
    var finalErrorMessage = "Please fill in all of the fields marked and correct the following errors: \n";
    var errorMessageEmail = "\n*The Email box must contain the following characters: '@' and '.'\n";
    var errorMessageName = "\n*The first letters of your first and last names must be capitilized.\n";
    

    if (ValidateEmail() && ValidateFullName()) {
        alert("Thank you for your application! We will try our best to respond within 14 business days.");
    } else {
        if (ValidateEmail() == false)
            finalErrorMessage = finalErrorMessage + errorMessageEmail;
        if (ValidateFullName() == false)
            finalErrorMessage = finalErrorMessage + errorMessageName;
        alert(finalErrorMessage);
    }
}
