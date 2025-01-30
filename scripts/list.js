import { app } from "./app.js";

function renderUserList() {
  const userList = JSON.parse(localStorage.getItem("users"));

  console.log(userList);

  for (const user of userList) {
    const userLineHTML = app.templates.userTablesLine(user);
    console.log(userLineHTML);
    app.locators.main.appendHTML(userLineHTML);
  }
}

app.actions.setBaseLocalStorage();
renderUserList();
