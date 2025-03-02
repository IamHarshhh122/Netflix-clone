document.addEventListener("DOMContentLoaded", function () {
    const faqBoxes = document.querySelectorAll(".faqbox");
    faqBoxes.forEach((box) => {
      box.addEventListener("click", function () {
        // Toggle active class for FAQ box and rotate SVG icon
        this.classList.toggle("active");
        // Get the next sibling which is the answer container
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
  