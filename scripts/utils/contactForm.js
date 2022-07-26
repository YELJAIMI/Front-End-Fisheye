function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    document.getElementById("form").reset();

}

function domModul(){
  const FormData = document.querySelector('.formData');
  const envoyer = document.getElementsByClassName("contact_button");
  const header = document.querySele6ctor(".modal header");
  const {name} = this.filterphotographer[0];
  const namephotograph = document.createElement('span');
  header.appendChild(namephotograph);
  namephotograph.textContent = '${name}';
  namephotograph.setAttribute("class", "namephotograph");
}

  function InputValidModal(){
    const inputprenom = document.getElementById("first").value;
    const inputnom = document.getElementById("last").value;
    const inputemail = document.getElementById("email").value;
    const inputmessage = document.getElementById("message").value;
  
    const ValidnameReturn = Validname(inputnom);
    const ValidfirstReturn = Validfirst(inputprenom);
    const ValidmailReturn = Validmail(inputemail);
    const ValidMessageReturn = ValidMessage(inputmessage);

    const formInputIsValid =
    ValidnameReturn &&      
    ValidfirstReturn&&   
    ValidmailReturn&&     
    ValidMessageReturn&&

    console.log(formInputIsValid);

    if(formInputIsValid){
    Valid();
    }
  }

//vérification prenom
function Validfirst(prenom){
  const regexprenom = /^[a-zA-Z '.-]+$/;
    console.log(prenom);
    if(prenom.length>2 && regexprenom.test(prenom)){
      FormData[0].setAttribute("data-error-visible", "false");
      return true;
    }
    else{
      FormData[0].setAttribute("data-error-visible", "true");
      FormData[0].setAttribute("data-error", "veuillez entrée un prenom valide");
      return false;
    }
}

  //verification nom
  function Validname(nom){
    const regexnom = /^[a-zA-Z '.-]*$/;
    console.log(nom);
    if(nom.length>2 && regexnom.test(nom)){
      FormData[1].setAttribute("data-error-visible", "false");
      return true;
    }
    else{
      FormData[1].setAttribute("data-error-visible", "true");
      FormData[1].setAttribute("data-error", "veuillez entrée un nom valide");
      return false;
    }
  }

  //verify e-mail
  function Validmail(email){
    const regexmail = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
    console.log(email);
    if(regexmail.test(email)){
      FormData[2].setAttribute("data-error-visible", "false");
      return true;
    }else{
      FormData[2].setAttribute("data-error-visible", "true");
      FormData[2].setAttribute("data-error", "veuillez entrée un e-mail valide");
      return false;
    }
  }