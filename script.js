"use strict";

const logo_svg = ` <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="20px"
            height="20px"
            version="1.1"
            style="
              shape-rendering: geometricPrecision;
              text-rendering: geometricPrecision;
              image-rendering: optimizeQuality;
              fill-rule: evenodd;
              clip-rule: evenodd;
            "
            viewBox="0 0 2321.84 2634.44"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <defs>
              <style type="text/css">
                <![CDATA[
                 .str0 {stroke: var(--color-brand);stroke-width:301.11;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.61313}
                 .fil0 {fill:none}
                ]]>
              </style>
            </defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                class="fil0 str0"
                d="M150.54 1900.6l1010.38 583.29 0 -2333.34 1010.38 583.29 -2020.76 1166.76zm2020.76 0l-2020.76 -1166.76"
              />
            </g>
          </svg>`;

const logos = document.querySelectorAll(`.logo`);

logos.forEach((logo) => {
  // const h1 = logo.querySelector("h1");
  logo.insertAdjacentHTML("afterbegin", logo_svg);
});

const slider = document.querySelector(`input#slider`);
const projectWrapper = document.querySelector(`#project-wrapper`);

const navBtn = document.querySelector("#nav-btn");
const nav = document.querySelector("nav#nav2");
const body = document.body;
console.log(body);
navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("naved");
});
document.addEventListener("click", function (event) {
  const isTargetNav = nav.contains(event.target);
  const isTargetBtn = event.target === navBtn;

  if (!isTargetBtn && !isTargetNav) {
    navBtn.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("naved");
  }
});

// const socialLinks = document.querySelectorAll(".social-wrapper a");
const socialMap = {
  github: ["https://github.com/psiyk", "GitHub"],
  "x-twitter": ["https://x.com/ps_iyk", "X (Twitter)"],
  linkedin: ["https://www.linkedin.com/in/psiyk", "LinkedIn"],
  instagram: ["https://www.instagram.com/psycke_1", "Instagram"],
  whatsapp: ["https://wa.me/2349072041772", "WhatsApp"],
  telegram: ["https://t.me/successiyk03", "Telegram"],
  mail: ["mailto:ikechukwuidoko101@gmail.com", "Email Me"],
  call: ["tel:+2349072041772", "Call Me"],
};

document.querySelectorAll(".c-a a").forEach((link) => {
  for (let className in socialMap) {
    if (link.classList.contains(className)) {
      [link.href, link.title] = socialMap[className];
      break;
    }
  }
});
