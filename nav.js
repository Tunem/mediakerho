document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navi").innerHTML = data;
    })
    .catch(error => console.error("Navigaation lataus epäonnistui:", error));
});