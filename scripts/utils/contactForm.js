
   const closeModale = document.querySelector('.modal header img');
  //selectionne "X" 
  //const closeModale = document.querySelector('.modalClose');
//launch modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  const namephotographer = document.getElementById('namephotographer');
  namePhotograph.textContent = namephotographer.innerText;
  setTimeout (closeModale.focus(),1000);
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
      let form = document.querySelector('.form');
      form.reset();
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
    const modal = document.querySelector('#contact_modal');
    //selectionner x de la modal 
    const select = document.querySelector('.modalClose');
    //selectionner les elements focusable
    const inputfirst = document.querySelector('#first');
    const inputname = document.querySelector('#name');
    const inputemail = document.querySelector('#email');
    const textarea = document.querySelector('#votre_message');
    const send = document.querySelector('#send');
    //selectionner tous les elements
    const focusableElements = `${select} ${closeModale} ${inputfirst}, ${inputname}, ${inputemail}, ${textarea}, ${send}`;
    const firstFocusableElememt = modalClose;
    const focusablecontent = focusableElements;
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
    
    firstFocusableElememt.focus();
    /*const focusableElements = '${href}, ${inputfirst}, ${inputname}, ${inputemail}, ${texterea}, ${modalClose}, ${namephotograph},';
  // selectionne la modale
    const modale = document.querySelector('.modalClose');
    const firstFocusableElements = closeModale.querySelectorAll(focusableElements);
    const focusablecontent = closeModale.querySelectorAll(focusableElements);
    const lastFocusableElement = focusablecontent[focusablecontent.length-1];

    document.addEventListener('keydown', function(e){
      let isTabPressed = e.key === 'Tab' || e.key === 'Tab';

      if(!isTabPressed){
        return;
      }

      if(e.shiftKey){
        if(document.activeElement === firstFocusableElement){
          lastFocusableElement.focus();
          e.preventDefault();
        }
      }else{
        if(document.activeElement === lastFocusableElement){
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    });
    firstFocusableElement.focus();*/

      /*//ferme le formulaire avec "ENTER " quand button close est selectionné avec TAB
      document.querySelector('.modal header img').addEventListener('keydown',function(e){
        if (e.key === "Enter" ) {
            closeModal(e);
        };
      })

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
      } else { // si tabulation est appuyer
        if (document.activeElement === lastFocusableElement) { 
          firstFocusableElememt.focus(); 
          e.preventDefault();
        }
      }
    });*/


//vérification prenom
function Validfirst(inputprenom){
  const regexprenom = /^([a-zA-Z \-]\s)+$/;
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