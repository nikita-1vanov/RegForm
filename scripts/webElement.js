export class WebElement {
  constructor(locator) {
    this.locator = locator;
  }

  get value() {
    return this.locator.value;
  }

  set value(text) {
    return (this.locator.value = text);
  }

  appendHTML(elem) {
    return (this.locator.innerHTML += elem);
  }
}
