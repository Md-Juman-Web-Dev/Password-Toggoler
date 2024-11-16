let eyeBtn = document.querySelector('.eyeBtn');
let passField = document.querySelector('.passBox input');

function passtoggol() {
  if (passField.type == 'password') {
    passField.type = 'text';
    eyeBtn.innerHTML = ' <iconify-icon icon="mdi-light:eye"></iconify-icon>';
  } else {
    passField.type = 'password';
    eyeBtn.innerHTML = '<iconify-icon icon="mdi-light:eye-off"></iconify-icon>';
  }
}
eyeBtn.addEventListener('click', passtoggol);
