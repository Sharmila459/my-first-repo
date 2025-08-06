function greetUser() {
  const name = document.getElementById('nameInput').value.trim();
  const message = name ? Nice to meet you, ${name}! 😊 : Please enter your name.;
  document.getElementById('greetingMessage').textContent=message:
}
