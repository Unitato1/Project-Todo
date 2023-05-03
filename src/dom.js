import { submiting } from "./form";

function toggle_form(main, form) {
  main.className = main.className === "" ? "hidden_bg" : "";
  form.className = form.className === "form" ? "hidden_form" : "form";
}

const DOMstuff = () => {
  const name = document.querySelector("#name");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority_radio = Array.from(
    document.querySelectorAll("[name='priority']")
  );

  const content = document.querySelector("#content");
  const close = document.querySelector("#close");
  const close_prjct = document.querySelector(".close");

  close.addEventListener("click", (e) => {
    e.preventDefault();
    toggle_form(main, form);
  });

  const main = document.querySelector("main");
  const add_form = document.querySelector("#plus_to_do");
  const form = document.querySelector(".hidden_form");
  const todo_form = document.querySelector("#todo_form");
  add_form.addEventListener("click", () => {
    toggle_form(main, form);
  });

  let to_do;
  let priority;
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    if (todo_form.checkValidity()) {
      e.preventDefault();
      priority = priority_radio.find((element) => {
        return element.checked;
      });
      to_do = submiting().submit(
        name.value,
        description.value,
        date.value,
        priority.value
      );
      content.appendChild(to_do);
      toggle_form(main, form);
    }
  });
  const add_project = document.querySelector("#add_project");
  const plus = document.querySelector("#plus");
  const add_project_btn = document.querySelector("#add_project_btn");
  close_prjct.addEventListener("click", (e) => {
    e.preventDefault();
    toggle_form(main, add_project);
  });
  add_project_btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ehee");
  });
  plus.addEventListener("click", (e) => {
    toggle_form(main, add_project);
  });
};

export { DOMstuff };
