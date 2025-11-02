// Wait for the page to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button1");

  button.addEventListener("click", () => {
    document.getElementById("changetextbutton1").textContent = "you clicked the button!!!";
  });
});
