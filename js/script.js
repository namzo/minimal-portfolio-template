import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

animate({
  elements: ".animate-wrap",
  easing: "in-out-circular",
  transform: ["translateY(60px)", "translateY(0px)"],
  duration: 800,
  opacity: [0, 1]
});