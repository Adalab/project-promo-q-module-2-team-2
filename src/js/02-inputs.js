'use strict';

let dataInput = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

function renderPreview() {
  if (dataInput.name === '') {
    previewName.innerHTML = `Nombre Apellido`;
  } else {
    previewName.innerHTML = dataInput.name;
  }
  if (dataInput.job === '') {
    previewJob.innerHTML = `Front-end developer`;
  } else {
    previewJob.innerHTML = dataInput.job;
  }
  if (dataInput.phone === '') {
    previewPhone.href = ``;
  } else {
    previewPhone.href = dataInput.phone;
  }
  if (dataInput.email === '') {
    previewEmail.href = ``;
  } else {
    previewEmail.href = `mailto: ${dataInput.email}`;
  }
  if (dataInput.linkedin === '') {
    previewLinkedin.href = ``;
  } else {
    previewLinkedin.href = dataInput.linkedin;
  }
  if (dataInput.github === '') {
    previewGithub.href = ``;
  } else {
    previewGithub.href = dataInput.github;
  }
}
const saveLocalStorage = () => {
  localStorage.setItem('localStorageCard', JSON.stringify(dataInput));
};

const handleInput = (ev) => {
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  dataInput[nameInput] = valueInput;
  renderPreview();
  saveLocalStorage();
};

allInputs.addEventListener('keyup', handleInput);

//Capturar imagen y visualizar
const fr = new FileReader();
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  dataInput.photo = fr.result; //Guarda url en dataInput
  saveLocalStorage();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
