import { submiting, todo } from "./form";

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
    if (add_project.className === "form" || form.className === "form") {
      return;
    }
    toggle_form(main, form);
  });

  let priority;
  const submit = document.querySelector("#submit");
  const todos = [];
  const todos_div = document.querySelector(".todos");
  submit.addEventListener("click", (e) => {
    if (todo_form.checkValidity()) {
      e.preventDefault();
      priority = priority_radio.find((element) => {
        return element.checked;
      });
      todos.push(
        todo(name.value, description.value, date.value, priority.value)
      );
      todos_div.replaceChildren();
      for (let curr_todo of todos) {
        todos_div.appendChild(submiting.submit_todo(curr_todo));
      }
      name.value = "";
      description.value = "";
      date.value = "";
      priority.value = "";
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
  const projects = [];
  const project_name = document.querySelector("#name_project");
  const nav_bar = document.querySelector(".projects_navbar");

  add_project_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let project = submiting.sumbit_project(project_name.value);
    nav_bar.appendChild(project);
    projects.push(project_name.value);

    project_name.value = "";
    toggle_form(main, add_project);
  });
  plus.addEventListener("click", (e) => {
    if (form.className === "form" || add_project.className === "form") {
      return;
    }
    toggle_form(main, add_project);
  });
};

export { DOMstuff };
