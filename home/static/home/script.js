function clipboard(id) {
  let text = document.getElementById(id);
  // Copy the text inside the text field
  navigator.clipboard.writeText(text.innerText);
}
