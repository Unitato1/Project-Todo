const submiting = (name, description, date, priority) => {
  const to_do = document.createElement("div");
  const name_div = document.createElement("div");
  name_div.textContent = name;
  const date_div = document.createElement("div");
  date_div.textContent = date;
  const priority_div = document.createElement("div");
  priority_div.textContent = priority;
  priority_div.className = priority;
  const description_div = document.createElement("div");
  description_div.textContent = "Description";
  to_do.append(name_div, date_div, priority_div, description_div);
  to_do.className = "todo";
  return to_do;
};

export { submiting };
