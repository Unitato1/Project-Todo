const todo = (name, description, date, priority) => {
  return { name, description, date, priority };
};

const submiting = (() => {
  const submit_todo = (todo) => {
    const curr_to_do = document.createElement("div");
    const name_div = document.createElement("div");
    const date_div = document.createElement("div");
    const priority_div = document.createElement("div");
    const description_div = document.createElement("div");
    name_div.textContent = todo.name;
    date_div.textContent = todo.date;
    priority_div.textContent = todo.priority;
    priority_div.className = todo.priority;
    description_div.textContent = todo.description;
    curr_to_do.append(name_div, date_div, priority_div, description_div);
    curr_to_do.className = "todo";
    return curr_to_do;
  };

  const sumbit_project = (name) => {
    const name_project_btn = document.createElement("button");
    name_project_btn.textContent = name;
    name_project_btn.className = "nav_bar_project";
    name_project_btn.id = name;
    return name_project_btn;
  };
  const create_navbar_todos = (todo) => {
    const curr = document.createElement("div");
    curr.className = "nav_bar_do";
    curr.textContent = todo.name;
    return curr;
  };
  const create_todos_of_project = (todos_div, todos_navbar, todos) => {
    todos_div.replaceChildren();
    todos_navbar.replaceChildren();
    for (let curr_todo of todos) {
      todos_navbar.appendChild(create_navbar_todos(curr_todo));
      todos_div.appendChild(submit_todo(curr_todo));
    }
  };

  return {
    submit_todo,
    sumbit_project,
    create_navbar_todos,
    create_todos_of_project,
  };
})();

export { submiting, todo };
