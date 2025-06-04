"use strict";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from(".page-wrapper", {
    duration: 1,
    opacity: 0,
  });
  const heroTimeline = gsap.timeline({
    defaults: { duration: 0.5, opacity: 0 },
  });
  gsap.from("section.hero", {
    y: 70,
    duration: 0.5,
    ease: "expoScale(0.5,7,none)",
    delay: 2,
    clearProps: "all",
  });
  heroTimeline
    .from(".hero h1", { y: "20px", ease: "expoScale(0.5,7,none)" })
    .from(".hero-secondary p", {
      x: -20,
      filter: "blur(2px)",
      ease: "expoScale(0.5,7,none)",
    })
    .from("header", { y: "-20", ease: "expoScale(0.5,7,none)" }, "-=0.5")
    .from("header nav a", {
      y: -20,
      duration: 1,
      stagger: 0.01,
      ease: "expoScale(0.5,7,none)",
      filter: "blur(2px)",
      opacity: 0,
      clearProps: "all",
    })
    .from(
      ".cta-btns a",
      {
        x: -10,
        ease: "expoScale(0.5,7,none)",
        stagger: 0.2,
      },
      "-=0.5"
    );
  document.querySelectorAll("section.nen").forEach((section) => {
    const title = section.querySelector(".title");
    const secWrapper = section.querySelectorAll(".section-wrapper .wrapper ");
    const li = section.querySelectorAll("li");
    const seca = section.querySelectorAll("a");
    const soca = document.querySelectorAll(".social-wrapper a");

    let elem = section;
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: `top 80%`,
        end: `bottom 80%`,
        markers: false,
        toggleActions: "play none none reverse",
      },
      defaults: {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all",
      },
    });
    sectionTl.from(title, { y: 40 });
    sectionTl.from([...secWrapper, ...li, ...seca, ...soca], {
      y: 40,
      stagger: 0.1,
    });
  });
});
