let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Tambahkan event listener untuk menanggapi klik pada setiap item navbar
let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Dapatkan id dari elemen yang sesuai dengan item yang diklik
    let sectionId = link.getAttribute("href").substring(1);

    // Sematkan kelas "active" pada item yang diklik dan hilangkan dari yang lain
    navLinks.forEach((navLink) => {
      navLink.classList.remove("home-active");
    });
    link.classList.add("home-active");

    // Sembunyikan semua bagian kecuali yang sesuai dengan item yang diklik
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";

    // Tutup menu setelah item diklik
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Tambahkan event listener untuk menutup menu saat area di luar menu diklik
document.addEventListener("click", (event) => {
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickInsideMenuIcon = menu.contains(event.target);

  if (!isClickInsideNavbar && !isClickInsideMenuIcon) {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});
