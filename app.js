const allBtnEl = document.querySelectorAll(".btn");
const hiddenEl = document.querySelectorAll(".hidden");

allBtnEl.forEach((element) => {
  //   console.log(element);
  element.addEventListener("click", () => {
    hiddenEl.forEach((hiddenText) => {
      //   console.log(hiddenText.id, element.id);
      if (element.id === hiddenText.id) {
        hiddenText.classList.toggle("show-links");
        // Toggle between "icon-minus.svg" and "icon-plus.svg"
        element.src = hiddenText.classList.contains("show-links")
          ? "./assets/images/icon-minus.svg"
          : "./assets/images/icon-plus.svg";
      }
    });
  });
});
