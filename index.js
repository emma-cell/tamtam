gsap.registerPlugin(ScrollTrigger);



const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs = section.querySelectorAll("div");
    gsap.from(divs, {
        opacity: 0,
        y: 100,
        duration: 4,
        stagger: 3,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center center",
            scrub: "true",
        }
    })
})


