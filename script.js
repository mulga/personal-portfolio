const form = document.querySelector(".contact-form");

function sendMsg(e) {
  e.preventDefault();
  const name = document.querySelector(".input-name");
  const email = document.querySelector(".input-email");
  const msg = document.querySelector(".message");

  //function

  Email.send({
    SecureToken: "69334d78-fec0-48d4-b323-9c52fb4ee95c",
    To: "mehmetulga@gmail.com",
    From: "mehmetulga@gmail.com",
    Subject: "Contact Form",
    Body: name.value + " " + email.value + " " + msg.value,
  }).then((message) => alert(message));
}

form.addEventListener("submit", sendMsg);
