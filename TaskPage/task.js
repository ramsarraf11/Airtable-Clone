let addTask = document.getElementById("addTask");
let tbody = document.querySelector('tbody');
console.log(tbody)
let arr = [];
addTask.addEventListener("click", () => {
    renderAnotherTask();
    tbody.innerHTML = arr.join(" ");
})
function renderAnotherTask() {
    let newArr = `<tr>
  <td><input type="text" readonly /></td>
  <td><input type="text" /></td>
  <td>
    <select name="" id="">
      <option value=""></option>
      <option value="Done">Done</option>
      <option value="Done">Todo</option>
      <option value="Done">In Progress</option>
    </select>
  </td>
  <td>
    <select name="" id="">
      <option value=""></option>
      <option id="low" value="">Low</option>
      <option value="">Medium</option>
      <option value="">High</option>
    </select>
  </td>
  <td><input type="date" /></td>
  <td><input type="date" /></td>
</tr>`
    arr.push(newArr);
}
console.log(arr);