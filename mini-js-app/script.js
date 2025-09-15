function register() {
    nameInput = document.querySelector("#name").value;
    emailInput = document.querySelector("#email").value;
    passwordInput = document.querySelector("#password").value;

    if (nameInput.trim().length > 0) {
        document.querySelector(
            "#nameHelp"
        ).innerHTML = `<div class="alert alert-danger" role="alert">
  email address is not in pattern
</div>`;
    } else {
        document.querySelector(
            "#nameHelp"
        ).innerHTML = `<div class="alert alert-danger" role="alert">
  email address is not in pattern
</div>`;
    } 

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // console.log(emailAddressInputValue.match(/^[a-zA-Z]{1}+[a-zA-Z0-9_.]+@gmail.com/))
    if (emailPattern.test(emailInput)) {
        document.querySelector(
            "#emailhelp"
        ).innerHTML = `<div class="alert alert-success" role="alert">
  email address added successfully
</div>`;
    } else {
        document.querySelector(
            "#emailhelp"
        ).innerHTML = `<div class="alert alert-danger" role="alert">
  email address is not in pattern
</div>`;
    }
    if (passwordInput.trim().length >= 6) {
        document.querySelector(
            "#passwordHelp"
        ).innerHTML = `<div class="alert alert-success" role="alert">
  password added successfully
</div>`;
    } else {
        document.querySelector(
            "#passwordHelp"
        ).innerHTML = `<div class="alert alert-danger" role="alert">
  password should not be less than 6 character
</div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#changeTheme').addEventListener('click', () => {
        // document.body.classList.remove('bg-light', 'text-dark')
        // document.querySelector('body').classList.add('bg-dark','text-primary')
        // console.log(document.body)
        console.log(document.body.classList)
        if (document.body.classList.contains('bg-light')) {
            document.body.classList.remove('bg-light', 'text-dark')

            document.querySelector('body').classList.add('bg-dark', 'text-primary')
        } else {
            document.body.classList.remove('bg-dark', 'text-primary')

            document.querySelector('body').classList.add('bg-light', 'text-dark')

        }
    })
})