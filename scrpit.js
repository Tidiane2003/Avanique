document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault()
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (nom.trim() === "" || email.trim() === "" || message.trim() === ""){
        alert("Veuillez remplir tous les champs !");
        return;
    }

    alert("Message envoyé avec succès !");

    document.getElementById("contact-form").reset();
    });