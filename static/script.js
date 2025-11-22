

  // Button 2 changes text and image
  const button2 = document.getElementById("button2");
  if (button2) {
    button2.addEventListener("click", () => {
      const textElem = document.getElementById("changingtext1");
      if (textElem) textElem.textContent = "You clicked the second button!!";

      const imgElem = document.getElementById("changeimagebutton2");
      if (imgElem) imgElem.src = "https://ibb.co/hFJcNPjm"; // replace with your new image path
	  
	  const textElem = document.getElementById("buh");
      if (textElem) textElem.textContent = "so that is my face.";
    });
  }
});
 
 document.addEventListener("DOMContentLoaded", () => {
  // Button 1 changes text
  const button1 = document.getElementById("button1");
  if (button1) {
    button1.addEventListener("click", () => {
      const textElem = document.getElementById("changingtext1");
      if (textElem) textElem.textContent = "You clicked the first button!!";
	  
	  const textElem = document.getElementById("buh");
      if (textElem) textElem.textContent = "hi";
	  
	  
	  const imgElem = document.getElementById("changeimagebutton2");
      if (imgElem) imgElem.src = "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"; // replace with your new image path
    });
  }