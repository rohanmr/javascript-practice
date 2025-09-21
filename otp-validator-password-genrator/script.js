let generatedOtp;

function generateOtp() {

  generatedOtp = Math.floor(1000 + Math.random() * 9000);

  document.querySelector("#otp").textContent = generatedOtp;

  return generatedOtp;
}


generateOtp();



function verifyOtp() {

  const inputOne = document.querySelector("#digitOne").value;
  const inputTwo = document.querySelector("#digitTwo").value;
  const inputThree = document.querySelector("#digitThree").value;
  const inputFour = document.querySelector("#digitFour").value;


  const otpVerify = inputOne + inputTwo + inputThree + inputFour;

  if (otpVerify === String(generatedOtp)) {
    document.querySelector("#message").innerHTML = `<div class="alert alert-success" role="alert">
  OTP Veify successfuly
</div>`

  } else {
    document.querySelector("#message").innerHTML = `<div class="alert alert-danger" role="alert">
  OTP Invalid
</div>`

  }
}

function restOtp() {
  document.querySelector("#digitOne").value = "";
  document.querySelector("#digitTwo").value = "";
  document.querySelector("#digitThree").value = "";
  document.querySelector("#digitFour").value = "";
  document.querySelector("#message").innerHTML = ""
  generateOtp()

}



function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeSpecial = document.getElementById("includeSpecial").checked;



  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSpecial) charset += "!@#$%^&*()_+";
  if (document.getElementById("excludeAmbiguous").checked) {
    charset = charset.replace(/[l1I0O]/g, "");
  }




  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
    console.log(password)
  }
  document.getElementById("result").value = password;



  evaluateStrength(password);
}
//   Password Strength Indicator (Visual Meter)

function evaluateStrength(password) {
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let width = strength * 25;
  strengthBar.style.width = width + "%";

  if (strength === 0) {
    strengthText.textContent = "";
    strengthBar.className = "progress-bar";
  } else if (strength === 1) {
    strengthText.textContent = "Weak";
    strengthBar.className = "progress-bar bg-danger";
  } else if (strength === 2) {
    strengthText.textContent = "Medium";
    strengthBar.className = "progress-bar bg-warning";
  } else if (strength === 3) {
    strengthText.textContent = "Strong";
    strengthBar.className = "progress-bar bg-info";
  } else {
    strengthText.textContent = "Very Strong";
    strengthBar.className = "progress-bar bg-success";
  }
}


function togglePasswordVisibility() {
  const input = document.getElementById("result");
  input.type = input.type === "password" ? "text" : "password";
}

function resetPass() {
  document.getElementById("length").value = "";
  document.getElementById("includeNumbers").checked = false;
  document.getElementById("includeUppercase").checked = false;;
  document.getElementById("includeSpecial").checked = false;;
  document.getElementById("excludeAmbiguous").checked = false
  document.getElementById("result").value = "";
  document.getElementById("strengthBar").className = "";
  document.getElementById("strengthText").textContent = "";
}