// Animation title Dev
const glowerTitleDev = document.querySelector(".title-home-dev");
glowerTitleDev.style.opacity = 0;
let animationTitle;

function fillTextAnimated (timestamp) {
    if (!start) start = timestamp;    

    glowerTitleDev.classList.add("title-animation");

    setTimeout(() => {
        glowerTitleDev.style.opacity = 1;
        glowerTitleDev.classList.remove("title-home-dev");
    }, 7000);

}

let start;

function startAnimation () {
    if (animationTitle) {
        cancelAnimationFrame(animationTitle);
    }
    start = null;
    animationTitle = requestAnimationFrame(fillTextAnimated);
}
startAnimation();

// nav buttons Events 
const buttons = {
    home: document.querySelector("#home-btn"),
    about: document.querySelector("#about-btn"),
    contact: document.querySelector("#contact-btn"),
    skills: document.querySelector("#skills-btn"),
    portfolio: document.querySelector("#github-btn"),
};
buttons.home.addEventListener("click", () =>{
    const top = document.querySelector(".nav-header");
    top.getBoundingClientRect();
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

buttons.about.addEventListener("click", () => {
    const aboutMe = document.querySelector("#about-section");
    let coords = aboutMe.getBoundingClientRect();
    scrollTo({
        top: coords.top + window.scrollY,
        left: coords.left + window.scrollX,
        behavior: 'smooth'
    });
});

buttons.contact.addEventListener("click", () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=maurolopes.dev@gmail.com");
});

buttons.skills.addEventListener("click", () => {
    const aboutMe = document.querySelector("#skill-section");
    let coords = aboutMe.getBoundingClientRect();
    scrollTo({
        top: coords.top + window.scrollY + -50,
        left: coords.left + window.scrollX,
        behavior: 'smooth'
    });
})
// ==================== // =====================

// link buttons
const buttonsLinks = document.querySelectorAll("#socials-media-container button");
const gitButtonLink = document.querySelector("#github-link-btn");
const linkedinButtonLink = document.querySelector("#linkedin-link-btn");
const facebookButtonLink = document.querySelector("#facebook-link-btn");

gitButtonLink.addEventListener("click", () => {
    window.open("https://github.com/naridevlope");
    
});

linkedinButtonLink.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/dominguesmauroo/");
    
});

facebookButtonLink.addEventListener("click", () => {
    window.open("https://www.facebook.com/mauro.domingues.167");
    
});

// Button Download 

const downloadCVBtn = document.querySelector("#download-cv");


downloadCVBtn.addEventListener("click", () => {
    window.open(`https://drive.usercontent.google.com/u/0/uc?id=1j03BJNLuUiekhYr4DstyG5oVNfJ8Z5Cx&export=download`);
    
});
// ======================= // ===================

// Testings theme button

const darkThemeBtn = document.querySelector("#theme-btn");
darkThemeBtn.addEventListener("change", () => {
    if (darkThemeBtn.checked) {
        buttonTheme('dark');
        saveThemeLocalStorage(theme.dark = true);
        saveThemeLocalStorage(theme.light = false);
    } else {
        buttonTheme('light');
        saveThemeLocalStorage(theme.light = true);
        saveThemeLocalStorage(theme.dark = false);
    }
    
});



function buttonTheme (theme) {
    const body = document.querySelector("body");
    const header = document.querySelector("#header-nav");
    const title = document.querySelector("#presentation-section");
    const mediaLinks = document.querySelector("#media-links");
    const skills = document.querySelector("#skill-section");
    const about = document.querySelector("#about-section");
    const downloadBtn = document.querySelector("#download-cv");
    const communicationBox = document.querySelectorAll("#skill-section .communication-box");
    const titlePresentationDev = document.querySelector("#dev-title");
    const darkThemeApply = {
        body,
        header,
        title,
        skills,
        about,
        mediaLinks,
        downloadBtn,
        communicationBox,
        titlePresentationDev
    }
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    switch(theme) {
        case 'dark':
            body.style.background = "#232323";
            header.classList.add("nav-header-dark");
            title.classList.add("presentation-dark");
            mediaLinks.classList.add("media-socials-dark");
            downloadBtn.classList.add("download-btn-dark");
            skills.classList.add("skills-dark");
            communicationBox.forEach((elementDiv) => {
                elementDiv.classList.add("communication-box-dark");
            });
            about.classList.add("about-container-dark");
            titlePresentationDev.classList.add("title-animation-dark");
            sun.classList.add("hide");
            moon.classList.remove("hide"); 
            break;

        case 'light':
            body.style.background = "#f4f4fc";
            header.classList.remove("nav-header-dark");
            title.classList.remove("presentation-dark");
            mediaLinks.classList.remove("media-socials-dark");
            downloadBtn.classList.remove("download-btn-dark");
            skills.classList.remove("skills-dark");
            communicationBox.forEach((elementDiv) => {
                elementDiv.classList.remove("communication-box-dark");
            });
            about.classList.remove("about-container-dark");
            titlePresentationDev.classList.remove("title-animation-dark");
            sun.classList.remove("hide");
            moon.classList.add("hide");
            break;
            
    }   
}
// System local storage 
const theme = {
    light: true,
    dark: false
};


 const getThemeLocalStorage = () => {
    const getTheme = JSON.parse(localStorage.getItem('theme') || "{}");
    return getTheme;
    
}

const saveThemeLocalStorage = () => {
    localStorage.setItem('theme', JSON.stringify(theme));
    
}
const loadThemeLocalStorage = () => {
    const theme = getThemeLocalStorage();
    if (theme.light) {
        darkThemeBtn.cheked = false;
        buttonTheme('light');
    } else {
        darkThemeBtn.checked = true;
        buttonTheme('dark')
    }
}

getThemeLocalStorage();
loadThemeLocalStorage();
