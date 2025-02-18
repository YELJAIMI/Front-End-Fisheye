
   const closeModale = document.querySelector('.modal header img');
 
//launch modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  const namephotographer = document.getElementById('namephotographer');
  namePhotograph.textContent = namephotographer.innerText;
  const crossCloseModale = document.querySelector('.modalClose');
  crossCloseModale.setAttribute('tabindex', '0');
  crossCloseModale.focus();
}
//fermeture de la modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

  const header = document.querySelector('.modal header');
  closeModale.setAttribute('class', 'modalClose');
  closeModale.setAttribute('alt', 'fermer le formulaire');
  const namePhotograph = document.createElement('span');
  namePhotograph.setAttribute("class","namephotograph");
  header.appendChild(namePhotograph);
  const formData = document.querySelectorAll(".formData");
  const envoyer = document.getElementById("send");
  envoyer.addEventListener('click', InputValidModal);

  function InputValidModal(e){
    e.preventDefault();
    let inputprenom = document.getElementById("first");
    let inputnom = document.getElementById("name");
    let inputemail = document.getElementById("email");
    let textarea = document.getElementById("votre_message");
  
    const ValidfirstReturn = Validfirst(inputprenom.value);
    const ValidnameReturn = Validname(inputnom.value);
    const ValidmailReturn = Validmail(inputemail.value);
    const ValidMessageReturn = Validmessage(textarea.value);

    const formInputIsValid =
    ValidnameReturn &&      
    ValidfirstReturn&&   
    ValidmailReturn&&     
    ValidMessageReturn;

    console.log(formInputIsValid);
    if(formInputIsValid){
      inputprenom = '';
      inputnom = '';
      inputemail = '';
      textarea = '';

      closeModal();
    }
  }


  // ferme le formulaire avec boutton "ESC"
     window.addEventListener('keydown', function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e);
      };
    });

    //selectionner la modal 
    const selectModal = document.querySelector('#contact_modal');

    //prremier element focusable
    const firstFocusableElememt = closeModale;

    //fermer le formulaire avec "ENTER" quand le button close est selectionner par TAB
    document.querySelector('.modal header img').addEventListener('keydown', function(e){
      if (e.key === "Enter" ) {
        closeModal();
      };
    })
    //dernier element focusable
    const lastFocusableElement = send;

    document.addEventListener('keydown', function(e) {
      let isTabPressed = e.key === 'Tab';
      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) { 
        if (document.activeElement === firstFocusableElememt) {
          lastFocusableElement.focus(); 
          e.preventDefault();
        }
      } else { 
        if (document.activeElement === lastFocusableElement) { 
          firstFocusableElememt.focus(); 
          e.preventDefault();
        }
      }
    });

//vérification prenom
function Validfirst(inputprenom){
  const regexprenom = /^([a-zA-Z]{3,30}\s*)+$/;
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
    const regexnom = /^([a-zA-Z]{3,30}\s*)+$/;
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