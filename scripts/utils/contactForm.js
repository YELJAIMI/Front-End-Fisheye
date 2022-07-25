function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function closeModal(){ 
    closeModal(); 
    
    const modalbg = document.querySelector("contact_modal");
    modalbg.innerHTML  = "contact_modal";
    
    form.style.display = "block"; 
    form.reset(); 
    modalbg.appendChild(form);
}


function ValidModal(){
    const prenom = document.getElementById("first").value;
    const nom = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const ValidnameReturn = Validname(nom);
    const ValidfirstReturn = Validfirst(prenom);
    const ValidmailReturn = Validmail(email);
    const ValidMessageReturn = ValidMessage(message);

    const formIsValid =
    ValidnameReturn &&      
    ValidfirstReturn&&   
    ValidmailReturn&&     
    ValidMessageReturn&&

    console.log(formIsValid);

    if(formIsValid){
    Valid();
    }
}
//vérification prenom
function Validfirst(prenom){
    const regexprenom = /^[a-zA-Z '.-]+$/;
    console.log(prenom);
    if(prenom.length>2 && regexprenom.test(prenom)){
      form[0].setAttribute("data-error-visible", "false");
      return true;
    }
    else{
      form[0].setAttribute("data-error-visible", "true");
      form[0].setAttribute("data-error", "veuillez entrée un prenom valide");
      return false;
    }
}

  //verification nom
  function Validname(nom){
    const regexnom = /^[a-zA-Z '.-]*$/;
    console.log(nom);
    if(nom.length>2 && regexnom.test(nom)){
      form[1].setAttribute("data-error-visible", "false");
      return true;
    }
    else{
      form[1].setAttribute("data-error-visible", "true");
      form[1].setAttribute("data-error", "veuillez entrée un nom valide");
      return false;
    }
  }
  //verify e-mail
  function Validmail(email){
    const regexmail = /^\S+@\S+\.\S+$/;
    console.log(email);
    if(regexmail.test(email)){
      form[2].setAttribute("data-error-visible", "false");
      return true;
    }else{
      form[2].setAttribute("data-error-visible", "true");
      form[2].setAttribute("data-error", "veuillez entrée un e-mail valide");
      return false;
    }
}

//close modal
function Valid() {
    closeModal();
    form.style.display = "none";
  
    const modal = document.querySelector(".modal");
    modal.innerHTML =+ "<div class='Modal' id='contact_Modal'>"+
        " <div class='modal'>"+
            "  <p class='message'>Merci pour votre message</p>"+
            "  <button class='contact_button'>Fermer</button>"+
          "  </div>"+
        "  </div>"+
      " </div>";
  
        launchModal();
  
       const contact_modal = document.querySelector(".Modal");
       contact_modal.addEventListener("click",closeModal); 
}