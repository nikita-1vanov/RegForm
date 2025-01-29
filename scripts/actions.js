import { app } from "./app.js";
import { baseUsers } from "./users.js";

export class Actions {
  usersLocalStorageKey = "users";

  setBaseLocalStorage() {
    if (!localStorage.getItem(this.usersLocalStorageKey)) {
      localStorage.setItem(
        this.usersLocalStorageKey,
        JSON.stringify(baseUsers)
      );
    }

    return localStorage.getItem(this.usersLocalStorageKey);
  }

  getUserInfo() {
    const userName = app.locators.fieldNameInModal.value;
    const userSurname = app.locators.fieldSurnameInModal.value;
    const userAge = app.locators.fieldAgeInModal.value;
    const userEmail = app.locators.fieldNameInModal.value;

    return {
      name: userName,
      surname: userSurname,
      age: Number(userAge),
      email: userEmail,
    };
  }

  clearModalData() {
    app.locators.fieldNameInModal.value = "";
    app.locators.fieldSurnameInModal.value = "";
    app.locators.fieldAgeInModal.value = "";
    app.locators.fieldNameInModal.value = "";
  }

  addNewUserInLocalStorage(userData) {
    const currentUsersList = JSON.parse(
      localStorage.getItem(this.usersLocalStorageKey)
    );
    currentUsersList.push(userData);
    localStorage.setItem(
      this.usersLocalStorageKey,
      JSON.stringify(currentUsersList)
    );
  }
}
