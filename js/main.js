function menu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('navbar-ml');
}
function navClose() {
  const removeClass = document.getElementById("nav");
  removeClass.classList.remove("navbar-ml");
}