import { submiting } from "./form";

function toggle_form(main, form) {
  main.className = main.className === "" ? "hidden_bg" : "";
  form.className = form.className === "form" ? "hidden_form" : "form";
}
function close_btn(form) {
  form.className = form.className === "form" ? "hidden_form" : "form";
}
function DOMstuff() {
  const name = document.querySelector("#name");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");

  const close = document.querySelector("#close");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    toggle_form(main, form);
  });

  const main = document.querySelector("main");
  const add_form = document.querySelector("#plus_to_do");
  const form = document.querySelector(".hidden_form");
  add_form.addEventListener("click", () => {
    toggle_form(main, form);
    console.log("Hello");
  });

  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(name.value);
    toggle_form(main, form);
  });
}
function create_to_do(to_do) {}

export { DOMstuff };
