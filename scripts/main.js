import { app } from "./app.js";

app.actions.setBaseLocalStorage();

function addNewUser() {
  const userData = app.actions.getUserInfo();

  console.log(userData);
  app.actions.addNewUserInLocalStorage(userData);
  app.actions.clearModalData();
}

window.addNewUser = addNewUser;
