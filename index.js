function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length !== 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    var password = document.forms['myForm']["fpass"].value;
    //const passwordInput = document.getElementById('password').value;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const alphanumericRegex = /[a-zA-Z0-9]/;

    const containsUppercase = uppercaseRegex.test(password);
    const containsSpecialChar = specialCharRegex.test(password);
    const containsAlphanumeric = alphanumericRegex.test(password);

    if (!containsUppercase || !containsSpecialChar || !containsAlphanumeric) {
      seterror("pass", "Password must contain at least 1 uppercase letter, 1 special character, and a combination of alphabets and numbers.");
      returnval = false;
    }
   
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword !== password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval
}
    document.getElementById("rform").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from submitting normally
        
        if (validateForm()){
        // Redirect to confirmation page
        window.location.href = "confirmation.html";}
    });
 
