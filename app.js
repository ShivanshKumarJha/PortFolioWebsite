(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const scriptURL = 'https://script.google.com/macros/s/AKfycbyMW7k7NYonGyFf-j3XQL8Gwy_a6XQ7a4nblpeF9wbLNp-jFTkBBYCQY8BS7o-UzvOo/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})