const btn = document.querySelector("button");
const section = document.querySelector("section");
const image = document.createElement("img");
const menuItemArray = Array.from(document.querySelectorAll("li"));
const headingTwo = document.querySelector("h2");
const newParagr = document.querySelector(".third");

document.addEventListener("keydown", (e) => {
  if (e.code.charCodeAt(3) >= 56 && e.code.charCodeAt(3) <= 90) {
    newParagr.textContent = e.code.charAt(3) + newParagr.textContent.trim();
    newParagr.classList.remove("hidden");
  }
});

image.setAttribute(
  "src",
  "https://i.etsystatic.com/11082453/r/il/b721a0/1906988181/il_794xN.1906988181_icwp.jpg"
);
image.setAttribute("class", "fade-in");
image.style.width = "300px";

btn.addEventListener("click", () => {
  section.style.backgroundColor = "#d0f0c0";
  section.append(image);
  image.style.display = "block";
  image.style.margin = "auto";
  image.style.paddingBottom = "5rem";
  btn.textContent = "WANT A BIGGER SLOTH? CLICK ON IMAGE";
});

image.addEventListener("click", () => {
  image.requestFullscreen();
});

headingTwo.addEventListener("mouseover", () => {
  headingTwo.textContent = "Greetings, fellow Programmer!";
  headingTwo.style.fontSize = "3rem";
  headingTwo.style.color = "green";
});
