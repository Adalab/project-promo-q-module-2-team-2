"use strict";const designTitle=document.querySelector(".js_designTitle"),divDesign=document.querySelector(".js_divDesign"),iconDesign=document.querySelector(".js_iconDesign"),fillTitle=document.querySelector(".js_fillTitle"),divFill=document.querySelector(".js_divFill"),iconFill=document.querySelector(".js_iconFill"),shareTitle=document.querySelector(".js_shareTitle"),divShare=document.querySelector(".js_divShare"),iconShare=document.querySelector(".js_iconShare"),buttonShare=document.querySelector(".js_shareButton"),cardShare=document.querySelector(".js_cardShare"),inputName=document.querySelector(".js_inputName"),inputJob=document.querySelector(".js_inputJob"),inputEmail=document.querySelector(".js_inputEmail"),inputPhone=document.querySelector(".js_inputPhone"),inputLinkedin=document.querySelector(".js_inputLinkedin"),inputGithub=document.querySelector(".js_inputGithub"),previewName=document.querySelector(".js_previewName"),previewJob=document.querySelector(".js_previewJob"),previewPhone=document.querySelector(".js_previewPhone"),previewEmail=document.querySelector(".js_previewEmail"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),allInputs=document.querySelector(".js_allInputs"),btnReset=document.querySelector(".js_btnReset"),handleClick=e=>{const t=e.currentTarget;t.classList.contains("js_designTitle")?(divDesign.classList.toggle("collapsed"),iconDesign.classList.toggle("rotate"),divFill.classList.add("collapsed"),iconFill.classList.remove("rotate"),divShare.classList.add("collapsed"),iconShare.classList.remove("rotate")):t.classList.contains("js_fillTitle")?(divFill.classList.toggle("collapsed"),iconFill.classList.toggle("rotate"),divDesign.classList.add("collapsed"),iconDesign.classList.remove("rotate"),divShare.classList.add("collapsed"),iconShare.classList.remove("rotate")):t.classList.contains("js_shareTitle")&&(divShare.classList.toggle("collapsed"),iconShare.classList.toggle("rotate"),divDesign.classList.add("collapsed"),iconDesign.classList.remove("rotate"),divFill.classList.add("collapsed"),iconFill.classList.remove("rotate"))};designTitle.addEventListener("click",handleClick),fillTitle.addEventListener("click",handleClick),shareTitle.addEventListener("click",handleClick);const dataInput={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function renderPreview(){""===dataInput.name?previewName.innerHTML="Nombre apellido":previewName.innerHTML=dataInput.name,""===dataInput.job?previewJob.innerHTML="Front-end developer":previewJob.innerHTML=dataInput.job,""===dataInput.phone?previewPhone.href="":previewPhone.href=dataInput.phone,""===dataInput.email?previewEmail.href="":previewEmail.href="mailto: "+dataInput.email,""===dataInput.linkedin?previewLinkedin.href="":previewLinkedin.href=dataInput.linkedin,""===dataInput.github?previewGithub.href="":previewGithub.href=dataInput.github}const handleInput=e=>{const t=e.target.name,n=e.target.value;dataInput[t]=n,renderPreview(),console.dir(dataInput)};allInputs.addEventListener("keyup",handleInput);const fr=new FileReader;function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,dataInput.photo=fr.result}function clearObjectData(){dataInput.palette=1,dataInput.name="",dataInput.job="",dataInput.phone="",dataInput.email="",dataInput.linkedin="",dataInput.github="",dataInput.photo=""}function clearInput(){inputName.value="",inputJob.value="",inputEmail.value="",inputPhone.value="",inputLinkedin.value="",inputGithub.value="",profileImage.style.backgroundImage="url('./assets/images/img-preview.jpg')",profilePreview.style.backgroundImage=""}fileField.addEventListener("change",getImage);const handleReset=e=>{e.preventDefault(),clearObjectData(),renderPreview(dataInput),clearInput(),paintPalette(1),console.log(dataInput)};btnReset.addEventListener("click",handleReset);const allInputsRadio=document.querySelectorAll(".js_inputRadio"),previewBox=document.querySelector(".js_previewBox");function paintPalette(e){previewBox.classList.remove("palette-1","palette-2","palette-3"),previewBox.classList.add("palette-"+e)}function handleRadio(e){const t=parseInt(e.currentTarget.value);dataInput.palette=t,paintPalette(t)}for(const e of allInputsRadio)e.addEventListener("click",handleRadio);const sectionUrl=document.querySelector(".js_url"),pMsg=document.querySelector(".js_msj"),shareTwitter=document.querySelector(".js_shareTwitter");function createCard(){fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(dataInput)}).then(e=>e.json()).then(e=>{console.log(e),e.success?(sectionUrl.innerHTML=e.cardURL,sectionUrl.href=e.cardURL,shareTwitter.href="https://twitter.com/intent/tweet?text= adalab&url="+e.cardURL):pMsg.innerHTML="Todos los campos deben estar llenos."})}function handleClickButtonShare(e){e.preventDefault(),createCard(),cardShare.classList.remove("collapsed")}buttonShare.addEventListener("click",handleClickButtonShare);