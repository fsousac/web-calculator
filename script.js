const themeSwitch = document.getElementById("theme-switch");
let currentTheme = "dark-theme";

function switch_theme() {
    if (currentTheme === "light-theme") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.getElementById("img-theme").classList.add("inv");
        currentTheme = "dark-theme";
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.getElementById("img-theme").classList.remove("inv");
        currentTheme = "light-theme";
    }
};