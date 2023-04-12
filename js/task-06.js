// const input = document.querySelector("#validation-input");
// const inputValueLength = input.getAttribute("data-length");

// input.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const currentInputValueLength = event.currentTarget.value.length;

//   if (currentInputValueLength === Number(inputValueLength)) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// }


const input = document.querySelector("#validation-input");
const inputValueLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const currentInputValueLength = event.currentTarget.value.length;

  if (currentInputValueLength === Number(inputValueLength)) {
    addClasses(input, "valid", "invalid");
  } else {
    addClasses(input, "invalid", "valid");
  }
}

function addClasses(element, classToAdd, classToRemove) {
  element.classList.add(classToAdd);
  element.classList.remove(classToRemove);
}

