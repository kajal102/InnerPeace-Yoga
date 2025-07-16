// contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from refreshing

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email.");
    } else {
      alert("Thank you! Your message has been sent.");
      form.reset();
    }
  });

  function validateEmail(email) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regex.test(email.toLowerCase());
  }
});
