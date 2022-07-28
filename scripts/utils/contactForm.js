function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    form.reset(); 
    modal.appendChild(form);
}

/*function domModul(){
  const formData = document.querySelector(".formData");
  const envoyer = document.getElementById("send");
  const header = document.querySelector(".modal header");
  const {name} = this.filterphotographer[0];
  const namephotographer = document.createElement('span');
  header.appendChild(namephotographer);
  formData.appendChild(contact_modal);
  envoyer.appendChild(contact_modal);
  namephotographer.textContent = $;{name};
  namephotographer.setAttribute("class", "namephotographer");
}*/


  const formData = document.querySelectorAll(".formData");
  const envoyer = document.getElementById("send");
  envoyer.addEventListener('click', InputValidModal);

  function InputValidModal(e){
    e.preventDefault();
    const inputprenom = document.getElementById("first").value;
    const inputnom = document.getElementById("name").value;
    const inputemail = document.getElementById("email").value;
    const inputmessage = document.getElementById("message").value;
  
    const ValidfirstReturn = Validfirst(inputprenom);
    const ValidnameReturn = Validname(inputnom);
    const ValidmailReturn = Validmail(inputemail);
    const ValidmessageReturn = Validmessage(inputmessage);

    const formInputIsValid =
    ValidnameReturn &&      
    ValidfirstReturn&&   
    ValidmailReturn&&     
    ValidmessageReturn&&

    console.log(formInputIsValid);
    if(formInputIsValid){
      console.log(inputprenom);
      console.log(inputnom);
      console.log(inputemail);
      console.log(inputmessage);
    }
  }

//vérification prenom
function Validfirst(inputprenom){
  const regexprenom = /^[a-zA-Z '.-]\s+$/;
    console.log(inputprenom);
    if(inputprenom.length>2 && regexprenom.test(inputprenom)){
      formData[0].setAttribute("data-error-visible", "false");
      return true;
    }
    else{
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "veuillez entrée un prenom valide");
      return false;
    }
}

  //verification nom
  function Validname(inputnom){
    const regexnom = /^[a-zA-Z '.-]\s*$/;
    console.log(inputnom);
    if(inputnom.length>2 && regexnom.test(inputnom)){
      formData[1].setAttribute("data-error-visible", "false");
      return true;
    }else{
      formData[1].setAttribute("data-error-visible", "true");
      formData[1].setAttribute("data-error", "veuillez entrée un nom valide");
      return false;
    }
  }

  //verify e-mail
  function Validmail(inputemail){
    const regexmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    console.log(inputemail);
    if(regexmail.test(inputemail)){
      formData[2].setAttribute("data-error-visible", "false");
      return true;
    }else{
      formData[2].setAttribute("data-error-visible", "true");
      formData[2].setAttribute("data-error", "veuillez entrée un e-mail valide");
      return false;
    }
  }

// texte  avec caractères minimum
function Validmessage(inputmessage) {
    if (message.value.trim().length > 1) {
      message.style.display = "none";
      console.log(inputmessage);
      return true;
    } else {
      inputmessage.textContent = "Vous devez laisser un message";
      return false;
    }
}