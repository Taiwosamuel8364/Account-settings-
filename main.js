var email1 = document.querySelector("input#email-1");
var email2 = document.querySelector("input#email-2");

email1.addEventListener("input", e => {
    email2.value = email1.value;
});
