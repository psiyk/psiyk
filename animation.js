"use strict";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", (event) => {
  const txtPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--txt-primary")
    .trim();
  console.log(txtPrimary);
  const txtPrimaryOp = getComputedStyle(document.documentElement)
    .getPropertyValue("--txt-primary-op")
    .trim();
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
    .fromTo(
      ".hero h1",
      {
        y: 20,
        // color: txtPrimary,
        // clearProps: "all",
      },
      {
        opacity: 1,
        ease: "expoScale(0.5,7,none)",
        color: txtPrimaryOp,
        clearProps: "all",
      }
    )
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
        clearProps: "all",
      },
      "-=0.5"
    );
  document.querySelectorAll(".nen").forEach((section) => {
    const title = section.querySelector(".title");
    const secWrapper = section.querySelectorAll(".section-wrapper .wrapper ");
    const li = section.querySelectorAll("li");
    const seca = section.querySelectorAll("a");
    const soca = document.querySelectorAll(".social-wrapper a");
    const txt = document.querySelectorAll("p.txt");

    let elem = section;
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: `top 70%`,
        end: `bottom 70%`,
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
  ScrollTrigger.create({
    trigger: ".about-contact.wrapper.sec3",
    start: "top 70%",
    // end: "bottom 70%",
    // toggleClass: "anim",
    onEnter: () => {
      document
        .querySelector(".about-contact.wrapper.sec3")
        .classList.add("anim");
    },
    onLeaveBack: () => {
      document
        .querySelector(".about-contact.wrapper.sec3")
        .classList.remove("anim");
    },
    markers: false,
    toggleActions: "play none none reverse",
  });
});
