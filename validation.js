document.getElementById('bookingForm').addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.querySelector('input[name="destination"]:checked').value;

  if (name === '' || email === '' || destination === '') {
    alert('Please fill out all fields');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  // display confirmation page
  document.getElementById('bookingForm').innerHTML = `
    <h2>Thank you for booking a trip to ${destination} with our space travel agency!</h2>
    <p>We will send confirmation to ${email}.</p>
  `;
}
