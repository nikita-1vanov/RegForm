import { Actions } from "./actions.js";
import { Locators } from "./locators.js";

class App {
  actions = new Actions();
  locators = new Locators();
}

export const app = new App();
