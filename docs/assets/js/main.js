"use strict";const designTitle=document.querySelector(".js_designTitle"),divDesign=document.querySelector(".js_divDesign"),iconDesign=document.querySelector(".js_iconDesign"),fillTitle=document.querySelector(".js_fillTitle"),divFill=document.querySelector(".js_divFill"),iconFill=document.querySelector(".js_iconFill"),shareTitle=document.querySelector(".js_shareTitle"),divShare=document.querySelector(".js_divShare"),iconShare=document.querySelector(".js_iconShare"),buttonShare=document.querySelector(".js_shareButton"),cardShare=document.querySelector(".js_cardShare"),handleClick=e=>{const t=e.currentTarget;t.classList.contains("js_designTitle")?(divDesign.classList.toggle("collapsed"),iconDesign.classList.toggle("rotate"),divFill.classList.add("collapsed"),divShare.classList.add("collapsed")):t.classList.contains("js_fillTitle")?(divFill.classList.toggle("collapsed"),iconFill.classList.toggle("rotate"),divDesign.classList.add("collapsed"),divShare.classList.add("collapsed")):t.classList.contains("js_shareTitle")&&(divShare.classList.toggle("collapsed"),iconShare.classList.toggle("rotate"),divDesign.classList.add("collapsed"),divFill.classList.add("collapsed"))};designTitle.addEventListener("click",handleClick),fillTitle.addEventListener("click",handleClick),shareTitle.addEventListener("click",handleClick),buttonShare.addEventListener("click",()=>{cardShare.classList.remove("collapsed")});const previewName=document.querySelector(".js_previewName"),previewJob=document.querySelector(".js_previewJob"),previewPhone=document.querySelector(".js_previewPhone"),previewEmail=document.querySelector(".js_previewEmail"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),allInputs=document.querySelector(".js_allInputs"),dataInput={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function innerPreview(){""===dataInput.name?previewName.innerHTML="Nombre apellido":previewName.innerHTML=dataInput.name,""===dataInput.job?previewJob.innerHTML="Front-end developer":previewJob.innerHTML=dataInput.job,""===dataInput.phone?previewPhone.href="":previewPhone.href=dataInput.phone,""===dataInput.email?previewEmail.href="":previewEmail.href="mailto: "+dataInput.email,""===dataInput.linkedin?previewLinkedin.href="":previewLinkedin.href=dataInput.linkedin,""===dataInput.github?previewGithub.href="":previewGithub.href=dataInput.github}const handleInput=e=>{const t=e.target.name,i=e.target.value;dataInput[t]=i,innerPreview(),console.log(dataInput)};allInputs.addEventListener("keyup",handleInput);const fr=new FileReader;function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,dataInput.photo=`url(${fr.result})`}fileField.addEventListener("change",getImage);