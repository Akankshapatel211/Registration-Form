let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")

function validate() {
  console.log("work validate")
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;

  if (firstName === '') {
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if (lastName === '') {
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }
  if (email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {
    emailInvalid.style.display = 'block'
    emailValid.style.display = 'none'
  } else {
    emailValid.style.display = 'block'
    emailInvalid.style.display = 'none'
  }
  if (phoneNumber.length < 12 || phoneNumber != '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6) {
    phoneValid.style.display = 'block'
    phoneInvalid.style.display = 'none'
  }
  else {
    phoneValid.style.display = 'none'
    phoneInvalid.style.display = 'block'
  }
  if (zipCode === '' || zipCode.length != 6) {
    zipCodeInvalid.style.display = 'block'
    zipCodeValid.style.display = 'none'
  } else {
    zipCodeValid.style.display = 'block'
    zipCodeInvalid.style.display = 'none'
  }

  // if(!tNCCheckBox){
  //   tnCInvalid.style.display = 'block'
  // } else {
  //   tnCInvalid.style.display = 'none'
  // }

  if (state === '') {
    stateInvalid.style.display = 'block'
    stateValid.style.display = 'none'
  } else {
    stateValid.style.display = 'block'
    stateInvalid.style.display = 'none'
  }
  //console.log("h java sc work")
}
Footer