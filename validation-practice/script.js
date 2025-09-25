const fullNameElm = document.querySelector("#fullname")
const emailInput = document.querySelector("#emailInput")

const mobileInput = document.querySelector("#mobileInput")

const genderMale = document.querySelector("#genderMale")

const genderFemale = document.querySelector("#genderFemale")
const passInput = document.querySelector("#passInput")
const conPassInput = document.querySelector("#conPassInput")


function validetForm() {
    success = false
    fullname = fullNameElm.value

    regex = /\d/
    if (fullname.trim().length == 0) {
        document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "Should not be empty";
    } else if (fullname.trim().length < 2) {
        document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "Name must be at least 2 characters";
    } else if (regex.test(fullname.trim())) {
        document.querySelector("#errorName").classList.remove('d-none')
        document.querySelector("#errorName").innerHTML = "must not be containt digit";
    } else {
        document.querySelector("#errorName").classList.add('d-none')

    }


    email = emailInput.value

    emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email.trim().length == 0) {

        document.querySelector("#errorEmail").classList.remove('d-none')
        document.querySelector("#errorEmail").innerHTML = "Email should not be empty";
    } else if (!emailregex.test(email)) {
        document.querySelector("#errorEmail").classList.remove('d-none')
        document.querySelector("#errorEmail").innerHTML = "Must be a valid email format";
    } else {

        document.querySelector("#errorEmail").classList.add('d-none')
    }



    mobile = mobileInput.value
    mobileRegex = /^[0-9]{10}$/;

    if (mobile.trim().length == 0) {
        document.querySelector("#errorMobile").classList.remove('d-none');
        document.querySelector("#errorMobile").innerHTML = "Mobile number is required";
        success = false;
    } else if (!mobileRegex.test(mobile)) {
        document.querySelector("#errorMobile").classList.remove('d-none');
        document.querySelector("#errorMobile").innerHTML = "Mobile number must be 10 digits";
        success = false;
    } else {
        document.querySelector("#errorMobile").classList.add('d-none');
        success = true
    }

    if (!genderMale.checked && !genderFemale.checked) {
        document.querySelector("#errorGender").classList.remove('d-none');
        document.querySelector("#errorGender").innerHTML = "Please select your gender";
        success = false;
    } else {
        document.querySelector("#errorGender").classList.add('d-none');
    }



    let password = passInput.value;
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if (password.trim().length == 0) {
        document.querySelector("#errorPassword").classList.remove('d-none');
        document.querySelector("#errorPassword").innerHTML = "Password should not be empty";
        success = false;
    } else if (!passRegex.test(password)) {
        document.querySelector("#errorPassword").classList.remove('d-none');
        document.querySelector("#errorPassword").innerHTML = "Password must be 6+ chars, include upper, lower & number";
        success = false;
    } else {
        document.querySelector("#errorPassword").classList.add('d-none');
    }

    let conPass = conPassInput.value;
    if (conPass.trim().length == 0) {
        document.querySelector("#errorConfirmPassword").classList.remove('d-none');
        document.querySelector("#errorConfirmPassword").innerHTML = "Please confirm your password";
        success = false;
    } else if (conPass !== password) {
        document.querySelector("#errorConfirmPassword").classList.remove('d-none');
        document.querySelector("#errorConfirmPassword").innerHTML = "Passwords do not match";
        success = false;
    } else {
        document.querySelector("#errorConfirmPassword").classList.add('d-none');
    }






    if (success) {
        document.querySelector("#succesMsg").classList.remove('d-none')

        document.querySelector("#succesMsg").innerHTML = "Form Submitted successfully";
    }






}