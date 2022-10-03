document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const form = event.target
        console.log(form.username.value);
        console.log(form.email.value);
        // const mobileNumber = parseInt(form.mobile.value);
        // if (mobileNumber.toString() == NaN.toString()) {
        //     alert("you have entered invalid number")
        // }
        console.log("the mobile number is " + mobileNumber);
    })

    document.getElementById("email").addEventListener("input", function (event) {
        const emailElement = event.target;
        console.log(emailElement.value);
        if (emailElement.validity.typeMismatch) {
            emailElement.setCustomValidity("Please enter an email address");
            emailElement.reportValidity();
        } else {
            emailElement.setCustomValidity("")
        }
    })
    document.addEventListener("click", function () {

        console.log(document.getElementById("outside").value);
    })
})
