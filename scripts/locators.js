import { WebElement } from "./webElement.js";

export class Locators {
  get fieldNameInModal() {
    return new WebElement(document.getElementById("input_name"));
  }

  get fieldSurnameInModal() {
    return new WebElement(
      document.querySelector(".modal__block :nth-child(5)")
    );
  }

  get fieldAgeInModal() {
    return new WebElement(document.querySelector("[data-testid='input_age']"));
  }

  get fieldEmailInModal() {
    return new WebElement(document.querySelectorAll(".modal__input")[3]);
  }

  get main() {
    return new WebElement(document.querySelector("main"));
  }

  get statusText() {
    return new WebElement(document.querySelector(".status p"));
  }

  get validationNameText() {
    return new WebElement(document.getElementById("error_name_text"));
  }

  get validationSurnameText() {
    return new WebElement(document.getElementById("error_surname_text"));
  }

  get validationAgeText() {
    return new WebElement(document.getElementById("error_age_text"));
  }

  get validationEmailText() {
    return new WebElement(document.getElementById("error_email_text"));
  }
}
