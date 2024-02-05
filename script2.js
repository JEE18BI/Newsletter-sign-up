const retrievedEmail = new URLSearchParams(window.location.search).get("paragraphContent");

const email = decodeURIComponent(retrievedEmail);
const emailSpan = document.getElementById("email");
emailSpan.textContent = email;

const ignorebutton = document.getElementById("button-2"); // Get the button element

ignorebutton.addEventListener("click", function() {
  window.location.href = "Index.html"; // Replace "index.html" with the actual path to the other page
});