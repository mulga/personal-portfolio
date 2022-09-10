// const contactForm = document.querySelector(".contact-form");
function sendMail(e) {
  e.preventDefault();

  const contactForm = document.querySelector("#contactForm");
  const inputName = document.querySelector("#inputName");
  const inputEmail = document.querySelector("#inputEmail");
  const message = document.querySelector("#formText");

  Email.send({
    SecureToken: "386f7d60-67c4-4633-b18f-59d7ca80756b ",
    To: "mehmetulga@gmail.com",
    From: inputEmail.value,
    Subject: "Contact Form",
    Body: inputName.value + message.value,
  }).then((message) => alert(message));
}

// password 8852D3A3E43F10DA00DB9196AEBF13C87755

// guvenlik token 1cba0eb4-d640-4f3b-aa71-dbbef0101082

// gmail password 1A60BC21F04E45DD1A05F01EBA7438F6A2F4
// gmail secure token 386f7d60-67c4-4633-b18f-59d7ca80756b
