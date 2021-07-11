function toggelMenu() {
  let x = document.getElementById("myMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
let colorHome = document.querySelector(".home");
let colorRed = document.querySelector(".red");
let colorPink = document.querySelector(".pink");
let colorSalamon = document.querySelector(".salamon");
let colorLavender = document.querySelector(".lavender");
let colorScreen = document.querySelector(".screen");

colorHome.addEventListener("click", () => colorScreen.style.backgroundColor = "rgb(47, 175, 248)");
colorRed.addEventListener("click", () => colorScreen.style.backgroundColor = "crimson");
colorPink.addEventListener("click", () => colorScreen.style.backgroundColor = "rgb(226, 151, 233)");
colorSalamon.addEventListener("click", () => colorScreen.style.backgroundColor = "darksalmon");
colorLavender.addEventListener("click", () => colorScreen.style.backgroundColor = "slateblue");