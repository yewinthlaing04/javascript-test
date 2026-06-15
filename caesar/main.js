const keyInput = document.getElementById("key");
const messageInput = document.getElementById("message");
const result = document.getElementById("result");
const button = document.getElementById("cypherBtn");

function caesarCipher(text, shift) {
  shift = shift % 26;

  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      // Lowercase letters
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      return char;
    })
    .join("");
}

button.addEventListener("click", () => {
  const text = messageInput.value;
  const shift = parseInt(keyInput.value, 10) || 0;

  result.textContent = caesarCipher(text, shift);
});

// Initial output
result.textContent = caesarCipher(
  messageInput.value,
  parseInt(keyInput.value, 10),
);
