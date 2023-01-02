const nums: NodeListOf<Element> = document.querySelectorAll(".step-num");

nums.forEach((e: Element) => {
  e.addEventListener("click", (e: Event) => {
    const activeElement: Element = document.querySelector(".step-num.active");

    activeElement.classList.remove("active");
    e.target.classList.add("active");
  });
});