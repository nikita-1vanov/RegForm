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
    return new WebElement(document.querySelector("[placeholder='Fill email']"));
  }
}
