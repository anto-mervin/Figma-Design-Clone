function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (firstName === "" || lastName === "") {
    alert("First and Last name are required");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  const formData = {
    first_name: firstName,
    last_name: lastName,
    phone_number: phone,
    email: email,
    password: password,
  };

  console.log(formData);

  alert("Form submitted successfully!");
  return true;
}
