import { Actions } from "./actions.js";
import { Locators } from "./locators.js";
import { Template } from "./template.js";

class App {
  actions = new Actions();
  locators = new Locators();
  templates = new Template();
}

export const app = new App();
