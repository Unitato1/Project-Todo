const submiting = () => {
  const to_do = document.createElement("div");
  const name_div = document.createElement("div");
  const date_div = document.createElement("div");
  const priority_div = document.createElement("div");
  const description_div = document.createElement("div");
  const submit = (name, description, date, priority) => {
    name_div.textContent = name;
    date_div.textContent = date;
    priority_div.textContent = priority;
    priority_div.className = priority;
    description_div.textContent = "Description";
    to_do.append(name_div, date_div, priority_div, description_div);
    to_do.className = "todo";
    return to_do;
  };
  return { submit };
};

export { submiting };
