document.addEventListener("DOMContentLoaded", (event) => {
  // gsap.from(".hero h1", {
  //   duration: 1,
  //   y: "20",
  //   opacity: 0,
  //   ease: "hop",
  // });

  // gsap.from(".cta-btns a", {
  //   duration: 0.5,
  //   opacity: 0,

  //   //   ease: "hop",
  //   ease: "expoScale(0.5,7,none)",
  //   stagger: 0.5,
  // });

  //   gsap.from(body, { duration: 1, opacity: 0, scale: 0.8 });
  gsap.from(".page-wrapper", {
    duration: 1,
    opacity: 0,
  });
  const heroTimeline = gsap.timeline({
    defaults: { duration: 0.5, opacity: 0 },
  });
  heroTimeline
    .from(".hero h1", { y: "20px", ease: "hop" })
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
      ease: "hop",
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
});
