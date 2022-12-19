let addTask = document.getElementById("addTask");
let tbody = document.querySelector('tbody');
console.log(tbody)
let arr = [];
addTask.addEventListener("click", () => {
  renderAnotherTask();
})
async function renderAnotherTask() {
  try {
    let date = new Date();
    let val = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    let obj = {
      name: "",
      status: "",
      note: "",
      start: val,
      end: val,
    }
    let todoReq = await fetch("https://639c1a6c64fcf9c11cab7654.mockapi.io/api/todos/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    if (todoReq.ok) {
      let res = await todoReq.json();
      console.log(res);
      renderTaskElements();
    }
  }
  catch (e) {

  }
}
async function renderTaskElements() {
  try {
    let getTodos = await fetch("https://639c1a6c64fcf9c11cab7654.mockapi.io/api/todos/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let res = await getTodos.json();
    console.log(res)
    getAsTaskElement(res);
  }
  catch (e) {
    console.log(e);
  }

}

renderTaskElements()
let taskElem = [];
function getAsTaskElement(data) {
  tbody.innerHTML = data.map((item) => {
    return `<tr>
      <td><input class="name_in" data-id="${item.id}" type="text" value="${item.name}"  /></td>
      <td><input class="note_in" data-id="${item.id}" type="text" value="${item.note}" /></td>
      <td>
        <select class="status_in" name=""data-id="${item.id}" id="" >
          <option  ${item.status == "" ? "selected" : ""} value="">select</option>
          <option ${item.status == "Done" ? "selected" : ""} value="Done">Done</option>
          <option  ${item.status == "Todo" ? "selected" : ""} value="Todo">Todo</option>
          <option  ${item.status == "Progress" ? "selected" : ""} value="Progress">In Progress</option>
        </select>
      </td>
      <td>
        <select class="priority_in" data-id="${item.id}" name="" id="" >
          <option ${item.priority == "" ? "selected" : ""} value="">select</option>
          <option ${item.priority == "low" ? "selected" : ""} id="low" value="low">Low</option>
          <option ${item.priority == "med" ? "selected" : ""} value="med">Medium</option>
          <option ${item.priority == "high" ? "selected" : ""} value="high">High</option>
        </select>
      </td>
      <td><input class="start_in" value="${item.start}" data-id="${item.id}" type="date" /></td>
      <td><input class="end_in" value="${item.end}" data-id="${item.id}" type="date" /></td>
      <td><i data-id="${item.id}" class="fa-solid fa-trash"></i><td>
    </tr>`
  }).join(" ");

  let all_name_tags = document.querySelectorAll(".name_in");
  for (let name of all_name_tags) {
    name.addEventListener("focusout", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("name", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
      renderTaskElements()
    })
  }
  let all_note_tags = document.querySelectorAll('.note_in');
  for (let note of all_note_tags) {
    note.addEventListener("focusout", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("note", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
    })
  }
  let all_status_tags = document.querySelectorAll(".status_in");
  for (let status of all_status_tags) {
    status.addEventListener("change", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("status", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
    })
  }
  let all_priority_tags = document.querySelectorAll(".priority_in");
  for (let priority of all_priority_tags) {
    priority.addEventListener("change", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("priority", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
    })
  }
  let all_start_tags = document.querySelectorAll(".start_in");
  for (let start of all_start_tags) {
    start.addEventListener("change", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("start", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
    })
  }
  let all_end_tags = document.querySelectorAll(".end_in");
  for (let end of all_end_tags) {
    end.addEventListener("change", (e) => {
      let val = e.target.value;
      let id = e.target.dataset.id;
      updateData("end", val, id);
      console.log(e.target.value);
      console.log(e.target.dataset.id);
    })
  }
  let all_delete_tags = document.querySelectorAll(".fa-solid");
  for (let task of all_delete_tags) {
    task.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      deleteTask(id);
    })
  }
}


async function updateData(key_name, value, id) {
  try {

    let toggle_request = await fetch(`https://639c1a6c64fcf9c11cab7654.mockapi.io/api/todos/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [key_name]: value })
    })
    if (toggle_request.ok) {
      let res = await toggle_request.json();
      console.log(res);
      renderTaskElements();
    }
  }

  catch (error) {
    console.log(error)
  }
}

async function deleteTask(id) {
  try {
    let deleteReq = await fetch(`https://639c1a6c64fcf9c11cab7654.mockapi.io/api/todos/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (deleteReq.ok) {
      let res = await deleteReq.json();
      console.log(res);
      renderTaskElements();
    }
  } catch (e) {
    console.log(e);
  }
}