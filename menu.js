const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");


toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")

if(mainTag.classList.contains("open")) {
toggleTag.innerHTML = `<img src ="./Icons/close-circle.svg" width="39px"> Close`;
} else {
toggleTag.innerHTML = `<img src="./Icons/menu 1.svg" width="39px"> Menu`;
}


});