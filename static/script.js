// Button 1: changes text
const button1 = document.getElementById("button1");
if (button1) {
  button1.addEventListener("click", () => {
    const textElem = document.getElementById("changetextbutton");
    if (textElem) textElem.textContent = "You clicked the button!!";
  });
}

// Button 2: changes text and image
const button2 = document.getElementById("button2");
if (button2) {
  button2.addEventListener("click", () => {
    const textElem = document.getElementById("changetextbutton");
    if (textElem) textElem.textContent = "You clicked the second button!!";

    const imgElem = document.getElementById("changeimagebutton2");
    if (imgElem) imgElem.src = "data:image/png;base64,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
