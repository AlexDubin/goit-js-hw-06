const input = document.querySelector("#validation-input");
const inputValueLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const currentInputValueLength = event.currentTarget.value.length;

  if (currentInputValueLength === Number(inputValueLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
