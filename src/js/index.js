const empresarial = document.getElementById("empresarial");
const blog = document.getElementById("blog");
const nutriCalc = document.getElementById("nutri");
const previsao = document.getElementById("previsao");
const basket = document.getElementById("basket");
const card = document.getElementById("card");
const menuEmpresarial = document.querySelector(".redirecionar-empresarial");
const menuNutri = document.querySelector(".redirecionar-nutri");
const menuBlog = document.querySelector(".redirecionar-blog");
const menuPrevisao = document.querySelector(".redirecionar-previsao");
const menuBasket = document.querySelector(".redirecionar-basket");
const menuCard = document.querySelector(".redirecionar-card");
const overlay = document.querySelector(".overlay-projetos");

// ABRIR MENU DOS PROJETOS

empresarial.addEventListener("click", () => {
  overlay.style.display = "block";
  menuEmpresarial.classList.add("active");
});

blog.addEventListener("click", () => {
  overlay.style.display = "block";
  menuBlog.classList.add("active");
});

nutriCalc.addEventListener("click", () => {
  overlay.style.display = "block";
  menuNutri.classList.add("active");
});

previsao.addEventListener("click", () => {
  overlay.style.display = "block";
  menuPrevisao.classList.add("active");
});

basket.addEventListener("click", () => {
  overlay.style.display = "block";
  menuBasket.classList.add("active");
});

card.addEventListener("click", () => {
  overlay.style.display = "block";
  menuCard.classList.add("active");
});

// FECHAR MENU PROJETOS

menuEmpresarial.addEventListener("click", () => {
  menuEmpresarial.classList.remove("active");
  overlay.style.display = "none";
});

menuNutri.addEventListener("click", () => {
  menuNutri.classList.remove("active");
  overlay.style.display = "none";
});

menuBlog.addEventListener("click", () => {
  menuBlog.classList.remove("active");
  overlay.style.display = "none";
});

menuPrevisao.addEventListener("click", () => {
  menuPrevisao.classList.remove("active");
  overlay.style.display = "none";
});

menuBasket.addEventListener("click", () => {
  menuBasket.classList.remove("active");
  overlay.style.display = "none";
});

menuCard.addEventListener("click", () => {
  menuCard.classList.remove("active");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  menuEmpresarial.classList.remove("active");
  menuNutri.classList.remove("active");
  menuBlog.classList.remove("active");
  menuPrevisao.classList.remove("active");
  menuBasket.classList.remove("active");
  menuCard.classList.remove("active");
  overlay.style.display = "none";
});

// ABRIR MENU LATERAL MOBILE

const btnAbrirMenu = document.querySelector(".btn-abrir-menu-mobile");
const MenuMobile = document.querySelector(".menu-mobile");
const overlayMenuMobile = document.querySelector(".overlay-menu-mobile");

// Abrir Menu

btnAbrirMenu.addEventListener("click", () => {
  overlayMenuMobile.style.display = "block";
  MenuMobile.classList.add("abrir-menu");
});

// Fechar menu

MenuMobile.addEventListener("click", () => {
  overlayMenuMobile.style.display = "none";
  MenuMobile.classList.remove("abrir-menu");
});

overlayMenuMobile.addEventListener("click", () => {
  MenuMobile.classList.remove("abrir-menu");
  overlayMenuMobile.style.display = "none";
});
