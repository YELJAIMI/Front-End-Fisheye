function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function ValidModal(){
    const prenom = document.getElementById("first").value;
    const nom = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const Message = document.getElementById("Message");
  
    const ValidnameReturn = Validname(nom);
    const ValidfirstReturn = Validfirst(prenom);
    const ValidmailReturn = Validmail(email);
    const ValidMessageReturn = ValidMessage(message);
}
