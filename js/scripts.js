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
    } else {
        buttonTheme('light');
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
            moon.classList.remove("hide"); // Remova a classe 'hide' do moon se necessário
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
    


// function buttonThemeOff () {

// }



function darkThemeBackgroundOn(dark) {
    const backgroundBody = document.querySelector("body");
    const backgroundDescriptionSkills = document.querySelector(".description-skills");
    const backgroundAboutMe = document.querySelector(".about-me");
    
    
    const input = document.querySelector("#theme-btn");
    input.checked ? dark = true : dark = false;

    switch (dark) {
        case true:
            case true:
                const colorSelectors = {
                    header: document.querySelector(".nav-header"),
                    nameH2: document.querySelector("#home-container h2"),
                    communication: document.querySelector(".communication-desc p"),
                    communicationH3: document.querySelector(".communication-desc h3"),
                    solution: document.querySelector(".solution-description p"),
                    solutionH3: document.querySelector(".solution-description h3"),
                    results: document.querySelector(".results p"),
                    resultsH3: document.querySelector(".results h3"),
                    aboutMe: document.querySelector(".about-me p"),
                    hobbies: document.querySelector(".hobbies"),
                    aboutMeH2: document.querySelector(".about-me h2"),
                    aboutMeH3: document.querySelector(".about-me h3"),
                    imageAbout: document.querySelector("#about-container img"),
                }
                
                colorSelectors.header.style.background = "#555";
                colorSelectors.nameH2.style.color = "#f4f4fc";
                colorSelectors.communication.style.color = "#f4f4fc";
                colorSelectors.communicationH3.style.color = "#f4f4fc";
                colorSelectors.solution.style.color = "#f4f4fc";
                colorSelectors.solutionH3.style.color = "#f4f4fc";
                colorSelectors.results.style.color = "#f4f4fc";
                colorSelectors.resultsH3.style.color = "#f4f4fc";
                colorSelectors.aboutMeH2.style.color = "#f4f4fc";
                colorSelectors.aboutMeH3.style.color = "#f4f4fc";
                colorSelectors.aboutMe.style.color = "#f4f4fc";
                colorSelectors.hobbies.style.color = "#f4f4fc";
                colorSelectors.imageAbout.style.background = "#f4f4fc";
                colorSelectors.imageAbout.style.border = "2px solid #555";
                backgroundBody.style.background = "#232323";
                backgroundDescriptionSkills.style.background = "#555";
                backgroundAboutMe.style.background = "#232323";
                backgroundAboutMe.style.border = "2px solid #555";
                const buttonsNavHeader = () => {
                    // Seleciona todos os botões dentro do elemento com a classe ".nav-header"
                    const buttons = document.querySelectorAll(".nav-header button");
                
                    // Percorrer sobre cada botão e alterar a cor para "#f4f4fc"
                    buttons.forEach(button => {
                        button.style.color = "#f4f4fc";
                    });
                }
                
                // Chama a function para aplicar as alterações nos botões
                buttonsNavHeader();
                
                const backgroundLinks = () => {
                    const bg = document.querySelectorAll("#socials-media-container button");
                    bg.forEach(link => {
                        link.style.background = "#f4f4fc";
                        link.style.borderRadius = "100px";
                    });
                }
                backgroundLinks();
                const iconDarkTheme = document.querySelector("#sol");
                iconDarkTheme.style.display = "none";
                const bold = document.querySelector(".solution-description b");
                bold.style.color = "#fff"
                
                break;
            case false:
                darkThemeBackgroundOff();
                break;
    }

}

function darkThemeBackgroundOff () {
    const backgroundBody = document.querySelector("body");
    const backgroundDescriptionSkills = document.querySelector(".description-skills");
    const backgroundAboutMe = document.querySelector(".about-me");

    const colorSelectors = {
        header: document.querySelector(".nav-header"),
        nameH2: document.querySelector("#home-container h2"),
        communication: document.querySelector(".communication-desc p"),
        communicationH3: document.querySelector(".communication-desc h3"),
        solution: document.querySelector(".solution-description p"),
        solutionH3: document.querySelector(".solution-description h3"),
        results: document.querySelector(".results p"),
        resultsH3: document.querySelector(".results h3"),
        aboutMe: document.querySelector(".about-me p"),
        hobbies: document.querySelector(".hobbies"),
        aboutMeH2: document.querySelector(".about-me h2"),
        aboutMeH3: document.querySelector(".about-me h3"),
        imageAbout: document.querySelector("#about-container img"),
    }
    
    colorSelectors.header.style.background = "#ededf1";
    colorSelectors.nameH2.style.color = "#232323";
    colorSelectors.communication.style.color = "#232323";
    colorSelectors.communicationH3.style.color = "#232323";
    colorSelectors.solution.style.color = "#232323";
    colorSelectors.solutionH3.style.color = "#232323";
    colorSelectors.results.style.color = "#232323";
    colorSelectors.resultsH3.style.color = "#232323";
    colorSelectors.aboutMeH2.style.color = "#232323";
    colorSelectors.aboutMeH3.style.color = "#232323";
    colorSelectors.aboutMe.style.color = "#232323";
    colorSelectors.hobbies.style.color = "#232323";
    colorSelectors.imageAbout.style.background = "#232323";
    colorSelectors.imageAbout.style.border = "2px solid #232323";
    backgroundBody.style.background = "#f4f4fc";
    backgroundDescriptionSkills.style.background = "#ededf1";
    backgroundAboutMe.style.background = "#ededf1";
    backgroundAboutMe.style.border = "2px solid #232323";
    const buttonsNavHeader = () => {
        
        const buttons = document.querySelectorAll(".nav-header button");
    
        
        buttons.forEach(button => {
            button.style.color = "#232323";
        });
    }
    
    
    buttonsNavHeader();
    
    const backgroundLinks = () => {
        const bg = document.querySelectorAll("#socials-media-container button");
        bg.forEach(link => {
            link.style.background = "#f4f4fc";
            link.style.borderRadius = "100px";
        });
    }
    backgroundLinks();
    const iconDarkTheme = document.querySelector("#sol");
    iconDarkTheme.style.display = "block";
    const iconLightTheme = document.querySelector("#lua");
    iconLightTheme.style.display = "none"
    const bold = document.querySelector(".solution-description b");
    bold.style.color = "#232323";

}

