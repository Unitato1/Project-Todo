import { submiting, todo } from "./form";

function toggle_form(main, form) {
  main.className = main.className === "" ? "hidden_bg" : "";
  form.className = form.className === "form" ? "hidden_form" : "form";
}

const DOMstuff = () => {
  const content = document.querySelector("#content");
  const close = document.querySelector("#close");
  const close_prjct = document.querySelector(".close");
  let curr_project = document.querySelector("#today");
  // let month = document.querySelector("#month");
  let projects_todos = { today: [], month: [] };
  let todos = projects_todos["today"];
  for (let cur in projects_todos) {
    document.querySelector("#" + cur).addEventListener("click", function () {
      curr_project = this;
      todos = projects_todos[this.id];
      submiting.create_todos_of_project(todos_div, todos_navbar, todos);
    });
  }

  const main = document.querySelector("main");
  const form = document.querySelector(".hidden_form");
  const todo_form = document.querySelector("#todo_form");
  const add_form = document.querySelector("#plus_to_do");
  const submit = document.querySelector("#submit");
  const todos_div = document.querySelector(".todos");
  const todos_navbar = document.querySelector(".todos_navbar");

  // form values
  const name = document.querySelector("#name");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  let priority;
  const priority_radio = Array.from(
    document.querySelectorAll("[name='priority']")
  );

  // add project
  const add_project_form = document.querySelector("#add_project_form");
  const add_project = document.querySelector("#add_project");
  const plus = document.querySelector("#plus");
  const add_project_btn = document.querySelector("#add_project_btn");
  let projects = ["today", "month"];
  const project_name = document.querySelector("#name_project");
  const nav_bar = document.querySelector(".projects_navbar");

  // submit project + todo
  add_project_btn.addEventListener("click", (e) => {
    if (add_project_form.checkValidity()) {
      e.preventDefault();
      for (let project of projects) {
        if (project === project_name.value) {
          alert("Name Already Taken, Try diffrent one");
          return;
        }
      }
      let project = submiting.sumbit_project(project_name.value);
      projects_todos[project.id] = [];
      project.addEventListener("click", function () {
        curr_project = this;
        todos = projects_todos[this.id];
        submiting.create_todos_of_project(todos_div, todos_navbar, todos);
      });
      nav_bar.appendChild(project);
      projects.push(project_name.value);
      project_name.value = "";
      toggle_form(main, add_project);
    }
  });
  submit.addEventListener("click", (e) => {
    if (todo_form.checkValidity()) {
      e.preventDefault();
      for (let todo of projects_todos[curr_project.id]) {
        if (todo.name === name.value) {
          alert("Name Already Taken, Try diffrent one");
          return;
        }
      }
      priority = priority_radio.find((element) => {
        return element.checked;
      });
      todos.push(
        todo(name.value, description.value, date.value, priority.value)
      );
      submiting.create_todos_of_project(todos_div, todos_navbar, todos);
      name.value = "";
      description.value = "";
      date.value = "";
      toggle_form(main, form);
    }
  });

  // show forms btns
  add_form.addEventListener("click", () => {
    if (add_project.className === "form" || form.className === "form") {
      return;
    }
    toggle_form(main, form);
  });
  plus.addEventListener("click", (e) => {
    if (form.className === "form" || add_project.className === "form") {
      return;
    }
    toggle_form(main, add_project);
  });
  //close btns
  close.addEventListener("click", (e) => {
    e.preventDefault();
    toggle_form(main, form);
  });
  close_prjct.addEventListener("click", (e) => {
    e.preventDefault();
    toggle_form(main, add_project);
  });
};

export { DOMstuff };
