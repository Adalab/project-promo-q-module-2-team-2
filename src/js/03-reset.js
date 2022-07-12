'use strict';

function clearObjectData() {
  dataInput.palette = 1;
  dataInput.name = '';
  dataInput.job = '';
  dataInput.phone = '';
  dataInput.email = '';
  dataInput.linkedin = '';
  dataInput.github = '';
  dataInput.photo = '';
}

function clearInput() {
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  profileImage.style.backgroundImage = 'url(../assets/images/img-preview.jpg)';
  profilePreview.style.backgroundImage = '';
}

const handleReset = (ev) => {
  ev.preventDefault();
  clearObjectData();
  renderPreview(dataInput);
  clearInput();
  paintPalette(1);
  console.log(dataInput);
};

btnReset.addEventListener('click', handleReset);
