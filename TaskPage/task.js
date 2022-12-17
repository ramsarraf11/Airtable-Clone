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
// console.log(arr);

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
      <td><input data-id="${item.id}" type="text" value="${item.name}"  /></td>
      <td><input data-id="${item.id}" type="text" value="${item.note}" /></td>
      <td>
        <select name=""data-id="${item.id}" id="" >
          <option  ${item.status == "" ? "selected" : ""} value=""></option>
          <option ${item.status == "Done" ? "selected" : ""} value="Done">Done</option>
          <option  ${item.status == "Todo" ? "selected" : ""} value="Todo">Todo</option>
          <option  ${item.status == "In Progress" ? "selected" : ""} value="Progress">In Progress</option>
        </select>
      </td>
      <td>
        <select data-id="${item.id}" name="" id="" >
          <option value=""></option>
          <option id="low" value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
        </select>
      </td>
      <td><input value="${item.start}" data-id="${item.id}" type="date" /></td>
      <td><input value="${item.start}" data-id="${item.id}" type="date" /></td>
    </tr>`
  }).join(" ");
}




document.getElementById("mySelect").addEventListener("change", (e) => {
  console.log(e);
  console.log(e.target.value)
})