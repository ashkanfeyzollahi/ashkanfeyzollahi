let isDarkThemeActive = Boolean(localStorage.getItem('isDarkThemeActive'));
const mainElement = document.body;
const sectionsWithBoxes = document.getElementsByClassName("section-with-boxes");

const aboutMeSection = document.getElementById("about-me-section");
const skillsAndExperiencesSection = document.getElementById("skills-and-experiences-section");
const pinnedRepositoriesSection = document.getElementById("pinned-repositories-section")

function scrollToElement(HTMLElement) {
  window.scrollTo({
    top: window.pageYOffset + HTMLElement.getBoundingClientRect().top,
    behavior: "smooth",
    duration: 500
  });
}

function switchDarkTheme() {
  isDarkThemeActive = !isDarkThemeActive;
  updateMainElementClass();
  localStorage.setItem('isDarkThemeActive', isDarkThemeActive ? 'True' : "");
  return isDarkThemeActive;
}

function updateMainElementClass() {
  const newClassName = `dark:bg-neutral-900 ${isDarkThemeActive ? "dark" : ""}`;
  mainElement.className = newClassName;
}

function applyFlexStylesToBoxSections(addFlexStyles) {
  const flexRowClassName = "section-with-boxes mx-12 my-2" + (addFlexStyles ? " flex flex-row" : "");
  for (i = 0; i < sectionsWithBoxes.length; i++) {
    sectionsWithBoxes[i].className = flexRowClassName;
    for (j = 0; j < sectionsWithBoxes[i].children.length; j++) {
      if (sectionsWithBoxes[i].children.length != 1) {
        sectionsWithBoxes[i].children[j].className = (addFlexStyles ? "w-1/" + sectionsWithBoxes[i].children.length + " " : "") + "ease duration-250 transition bg-white dark:bg-neutral-800 rounded-lg px-6 py-8 border-1 border-black/10 dark:border-white/10 shadow-md m-3 hover:-translate-y-1 transform";
      } else { sectionsWithBoxes[i].children[j].className = (addFlexStyles ? "w-full " : "") + "ease duration-250 transition bg-white dark:bg-neutral-800 rounded-lg px-6 py-8 border-1 border-black/10 dark:border-white/10 shadow-md m-3 hover:-translate-y-1 transform"; }
    }
  }
}

updateMainElementClass();

if (window.innerWidth > 900) {
  applyFlexStylesToBoxSections(true);
} else {
  applyFlexStylesToBoxSections(false);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    applyFlexStylesToBoxSections(true);
  } else {
    applyFlexStylesToBoxSections(false);
  }
});
