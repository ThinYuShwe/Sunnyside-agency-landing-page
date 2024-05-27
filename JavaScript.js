document
  .querySelector(".icon-hamburger")
  .addEventListener("click", function () {
    const menuBox = document.querySelector(".header-menu");
    if (menuBox.style.display === "block") {
      menuBox.style.display = "none";
    } else {
      menuBox.style.display = "block";
    }
  });
