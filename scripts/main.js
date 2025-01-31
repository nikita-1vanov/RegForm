import { app } from "./app.js";

app.actions.setBaseLocalStorage();

function addNewUser() {
  app.actions.clearValidTextInModalData();
  const userData = app.actions.getUserInfo();
  const countErrors = app.actions.validateUserData(userData);

  if (countErrors === 0) {
    app.actions.addNewUserInLocalStorage(userData);
    app.actions.clearInputModalData();
    app.actions.addStatus("Success", true);
  } else {
    app.actions.addStatus("Error", false);
  }
}

window.addNewUser = addNewUser;
