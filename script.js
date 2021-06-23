const btn = document.querySelector("button");
const main = document.querySelector("main");
const image = document.createElement("img");
const menuItemArray = Array.from(document.querySelectorAll("li"));
const headingTwo = document.querySelector("h2");
const newParagr = document.querySelector(".third");

document.addEventListener("keydown", (e) => {
  // if (e.code == "KeyZ") {
  //   newParagr.textContent = e.code.charAt(3) + newParagr.textContent.trim();
  //   newParagr.classList.remove("hidden");
  // }
  if (e.code.charCodeAt(3) >= 56 && e.code.charCodeAt(3) <= 90) {
    newParagr.textContent = e.code.charAt(3) + newParagr.textContent.trim();
    newParagr.classList.remove("hidden");
  }
});

image.setAttribute(
  "src",
  "https://i.etsystatic.com/11082453/r/il/b721a0/1906988181/il_794xN.1906988181_icwp.jpg"
);

image.setAttribute("width", "300px");

btn.addEventListener("click", () => {
  main.style.backgroundColor = "pink";
  main.append(image);
  image.style.display = "block";
  image.style.margin = "auto";
  image.style.paddingBottom = "5rem";
});

image.addEventListener("click", () => {
  image.style.width = "100vw";
  image.style.height = "100vh";
});

headingTwo.addEventListener("mouseover", () => {
  headingTwo.textContent = "Greetings, fellow Programmer!";
  headingTwo.style.fontSize = "2rem";
  headingTwo.style.color = "green";
});
