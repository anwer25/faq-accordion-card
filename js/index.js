const btn = document.querySelectorAll(".btn");

function acc() {
  this.classList.toggle("is-open");
  console.log(this);
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
}

btn.forEach((e) => {
  e.addEventListener("click", acc);
});
