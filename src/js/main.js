import { initSLider } from "./components/slider";

initSLider();

const triggers = Array.from(
  document.querySelectorAll('[data-toggle="collapse"]')
);

window.addEventListener(
  "click",
  (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
      const selector = elm.getAttribute("data-target");
      collapse(selector, "toggle");
    }
    elm.classList.toggle("active");
  },
  false
);

const fnmap = {
  toggle: "toggle",
  show: "add",
  hide: "remove",
};

const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach((target) => {
    target.classList[fnmap[cmd]]("show");
  });
};

let items = document.querySelectorAll("dropdown__toggle");

items.forEach((item) => {
  item.addEventListener("click", accordionHandler);
});

function accordionHandler() {
  this.classList.toggle("active");
}
