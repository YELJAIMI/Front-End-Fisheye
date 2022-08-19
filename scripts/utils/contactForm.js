//launch modal
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}
//fermeture de la modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

  const header = document.querySelector('.modal header');
  const namePhotograph = document.createElement('span');
  namePhotograph.setAttribute("class","namephotograph");
  header.appendChild(namePhotograph);
  namePhotograph.textContent = `${namePhotograph}`;
  const formData = document.querySelectorAll(".formData");
  const envoyer = document.getElementById("send");
  envoyer.addEventListener('click', InputValidModal);

  function InputValidModal(e){
    e.preventDefault();
    const inputprenom = document.getElementById("first").value;
    const inputnom = document.getElementById("name").value;
    const inputemail = document.getElementById("email").value;
    const textarea = document.getElementById("message").value;
  
    const ValidfirstReturn = Validfirst(inputprenom);
    const ValidnameReturn = Validname(inputnom);
    const ValidmailReturn = Validmail(inputemail);
    const ValidmessageReturn = Validmessage(textarea);

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
      console.log(textarea);
      let from = document.querySelector('.form');
      formData.reset();
      closeModal();
    }
  }

     // ferme le formulaire avec boutton "ESC"
     window.addEventListener('keydown', function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e);
      };
    })
    //ferme le formulaire avec "ENTER " quand button close est selectionné avec TAB
    document.querySelector('.modal header img').addEventListener('keydown',function(e){
      if (e.key === "Enter" ) {
        closeModal(e);
      };
    })

    // annule la fonction par défaut du bouton d'envoi
    document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault();})

  // selectionne la modale
  const selectModal = document.querySelector('.contact_modal');

  //selectionne "X" 
  const closeModale = document.querySelector('.modal header img');

  //selectionne LABEL et INPUT
const firstName = document.querySelector('label');
const inputFirst = document.querySelector('#first');
const lastName = document.querySelector('label');
const inputLast = document.querySelector('#name');
const emailLabel = document.querySelector('label');
const emailInput = document.querySelector('#email');
const yourMessage = document.querySelector('#message');

//selectionne le bouton "envoyez"
const buttonSend = document.querySelector('#send');

//selectionne tous les elements focusables
const allFocusableElements = `${closeModale},${firstName},${inputFirst},
${lastName},${inputLast},${emailLabel},${emailInput},${yourMessage}, ${buttonSend}`

//premier élement focusable
const firstFocusableElememt = closeModale;

//contenu de tous
const focusableContent = allFocusableElements;

//dernier élement focusable
const lastFocusableElement = buttonSend;


// header du formulaire
/*const header = document.querySelector(".modal header");
const {name} = this.filterPhotographer();
const namePhotograph = document.createElement('span');
header.appendChild(namePhotograph);
namePhotograph.textContent = `${name}`;
namePhotograph.setAttribute("class","namephotograph");*/

//vérification prenom
function Validfirst(inputprenom){
  const regexprenom = /^[a-zA-Z \-]+$/;
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
    const regexnom = /^[a-zA-Z \-]+$/;
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
      formData[2].setAttribute("data-error", "veuillez entrer un e-mail valide");
      return false;
    }
  }

  // texte  avec caractères minimum
  function Validmessage(textarea) {

    if (textarea.trim().length > 1) {
      console.log(textarea);
      formData[3].setAttribute("data-error-visible", "false");
      return true;
    } else {
      formData[3].setAttribute("data-error-visible", "true");
      formData[3].setAttribute("data-error", "veuillez entrer un message valide");
      return false;
    }
  }