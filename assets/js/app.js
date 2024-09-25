let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("btn-dark-mode-toogle");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

window.gtranslateSettings = {
  default_language: "pt",
  detect_browser_language: true,
  languages: ["pt", "en"],
  wrapper_selector: ".gtranslate_wrapper",
  switcher_horizontal_position: "right",
  float_switcher_open_direction: "right",
  flag_style: "3d",
  alt_flags: { en: "usa", pt: "brazil" },
};

AOS.init();