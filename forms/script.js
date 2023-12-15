const body = document.querySelector('body');
let firstnameInput = document.getElementById('firstname');
let ageInput = document.getElementById('age');
let pwdInput = document.getElementById('pwd');
let pwdConfirmInput = document.getElementById('pwd-confirm');
let toggleDarkMode = document.getElementById('toggle-darkmode');

firstnameInput.addEventListener("keyup", (e) => {
    //console.log('touche', e.key)
    let displayFirstname = document.getElementById('display-firstname');
    if (e.key === 'Backspace') {
        let content = displayFirstname.textContent;
        displayFirstname.textContent = content.substring(0, content.length - 1); // <==== Supprimez le dernier caractère affiché
      }
      else {
        displayFirstname.appendChild(document.createTextNode(e.key))
      }
});

ageInput.addEventListener("keyup", (e) => {
    //console.log('touche', e.key);
    let hardTruth = document.getElementById('a-hard-truth')
    let ageValue = ageInput.value
    //console.log(ageValue)
    if (parseInt(ageValue) >= 18) {
        hardTruth.style.visibility = "initial";
    } else { 
        hardTruth.style.visibility = "hidden";
    }
});


const pwdVerification = () => {
    console.log(pwdInput.value)
    let pwd = pwdInput.value
    let pwdConfirm = pwdConfirmInput.value

    if (pwd.length < 6) {
        pwdInput.style.borderColor = "red";
    } else {
        pwdInput.style.borderColor = "";
        pwdConfirmInput.style.borderColor = "";
    }

    if (pwdConfirm !== pwd && pwdConfirm.length > 0) {
        pwdConfirmInput.style.borderColor = "red";
        pwdInput.style.borderColor = "red";
    } else {
        pwdConfirmInput.style.borderColor = "";
    }
}
pwdInput.addEventListener("keyup", pwdVerification );
pwdConfirmInput.addEventListener("keyup", pwdVerification );
