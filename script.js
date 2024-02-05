var transferButton=document.getElementById("subscribe-button");
var userEmailInput=document.getElementById("email-input");


transferButton.addEventListener("click", function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = userEmailInput.value;

if (!emailRegex.test(email)) {
  alert("Invalid email format. Please enter a valid email address.");
  return; // Prevent redirection or further processing
}

   
  const encodedEmail = encodeURIComponent(email);
  const url = "index2.html?paragraphContent=" + encodedEmail;
  window.location.href = url;
});