const body = document.querySelector('body');
let firstnameInput = document.getElementById('firstname');
let ageInput = document.getElementById('age');
let pwdInput = document.getElementById('pwd');
let pwdConfirmInput = document.getElementById('pwd-confirm');
let toggleDarkMode = document.getElementById('toggle-darkmode');

firstnameInput.addEventListener("keyup", (e) => {
    console.log('touche', e.key)
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
    console.log('touche', e.key)
});

pwdInput.addEventListener("keyup", (e) => {
    console.log('touche', e.key)
});

pwdConfirmInput.addEventListener("keyup", (e) => {
    console.log('touche', e.key)
});