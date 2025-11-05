document.addEventListener("DOMContentLoaded", () => {
  // Button 1 changes text
  const button1 = document.getElementById("button1");
  if (button1) {
    button1.addEventListener("click", () => {
      const textElem = document.getElementById("changingtext1");
      if (textElem) textElem.textContent = "You clicked the button!!";
    });
  }

  // Button 2 changes text and image
  const button2 = document.getElementById("button2");
  if (button2) {
    button2.addEventListener("click", () => {
      const textElem = document.getElementById("changingtext1");
      if (textElem) textElem.textContent = "You clicked the second button!!";

      const imgElem = document.getElementById("changeimagebutton2");
      if (imgElem) imgElem.src = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200s"; // replace with your new image path
    });
  }
});
