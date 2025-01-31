export class WebElement {
  constructor(locator) {
    this.locator = locator;
  }

  appendHTML(elem) {
    return (this.locator.innerHTML += elem);
  }

  set text(value) {
    return (this.locator.innerText = value);
  }

  get value() {
    return this.locator.value;
  }

  set value(text) {
    return (this.locator.value = text);
  }

  setStyle(key, value) {
    this.locator.style[key] = value;
  }
}
