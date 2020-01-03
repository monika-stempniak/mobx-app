// https://github.com/rokoroku/react-mobx-typescript-boilerplate
import { Store } from "./Store";

export function createStores() {
  const appStore = new Store();
  return {
    store: appStore
  };
}
