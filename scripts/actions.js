import { app } from "./app.js";
import { baseUsers } from "./users.js";

export class Actions {
  usersLocalStorageKey = "users";

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

  addStatus(text, isSuccess) {
    app.locators.statusText.text = text;
    if (isSuccess) {
      app.locators.statusText.setStyle("color", "greenyellow");
    } else {
      app.locators.statusText.setStyle("color", "red");
    }
  }

  clearInputModalData() {
    app.locators.fieldNameInModal.value = "";
    app.locators.fieldSurnameInModal.value = "";
    app.locators.fieldAgeInModal.value = "";
    app.locators.fieldEmailInModal.value = "";
  }

  clearValidTextInModalData() {
    app.locators.validationNameText.text = "";
    app.locators.validationSurnameText.text = "";
    app.locators.validationAgeText.text = "";
    app.locators.validationEmailText.text = "";
  }

  getUserInfo() {
    const userName = app.locators.fieldNameInModal.value;
    const userSurname = app.locators.fieldSurnameInModal.value;
    const userAge = app.locators.fieldAgeInModal.value;
    const userEmail = app.locators.fieldEmailInModal.value;

    return {
      name: userName,
      surname: userSurname,
      age: Number(userAge),
      email: userEmail,
    };
  }

  setBaseLocalStorage() {
    if (!localStorage.getItem(this.usersLocalStorageKey)) {
      localStorage.setItem(
        this.usersLocalStorageKey,
        JSON.stringify(baseUsers)
      );
    }

    return localStorage.getItem(this.usersLocalStorageKey);
  }

  validateUserData(userData) {
    let errors = 0;

    if (userData.name.length < 2 || userData.name.length > 20) {
      app.locators.validationNameText.text = "The length must between 2 and 20";
      errors++;
    }

    if (!/^[a-zA-Z]*$/.test(userData.name)) {
      app.locators.validationNameText.text = "Invalid name";
      errors++;
    }

    if (userData.surname.length < 2 || userData.surname.length > 20) {
      app.locators.validationSurnameText.text =
        "The length must between 2 and 20";
      errors++;
    }

    if (!/^[a-zA-Z]*$/.test(userData.surname)) {
      app.locators.validationSurnameText.text = "Invalid surename";
      errors++;
    }

    if (userData.email.length < 5 || userData.email.length > 40) {
      app.locators.validationEmailText.text =
        "The length must between 5 and 40";
      errors++;
    }

    if (!/^[a-zA-Z1-9@.]*$/.test(userData.email)) {
      app.locators.validationEmailText.text = "Invalid email";
      errors++;
    }

    if (!Number(userData.age)) {
      app.locators.validationAgeText.text = "Age must me integer";
      errors++;
    }

    if (Number(userData.age) < 1 || Number(userData.age) > 100) {
      app.locators.validationAgeText.text = "Age must between 1 and 100";
      errors++;
    }

    return errors;
  }
}
