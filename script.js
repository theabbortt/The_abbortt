document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animated skills section
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "0.3s";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.transform = "scale(1)";
        });
    });
});
