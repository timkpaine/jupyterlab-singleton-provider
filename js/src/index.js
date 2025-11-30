import {Token} from "@lumino/coreutils";
import "../style/index.css";

export const PLUGIN_ID = "jupyterlab-singleton-provider";
export const ISingletonProvider = new Token(PLUGIN_ID);

export class SingletonElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div style="border: 2px solid blue; padding: 10px;">
      <h3>Singleton Web Component</h3>
      <p>This is a singleton web component provided by the jupyterlab-singleton-provider extension.</p>
    </div>`;
  }
}

// Define the custom element
customElements.define("singleton-element", SingletonElement);

const extension = {
  activate: (app) => {
    // eslint-disable-next-line no-console
    console.log("JupyterLab extension jupyterlab-singleton-provider is activated!");
  },
  autoStart: true,
  id: PLUGIN_ID,
  optional: [],
  requires: [],
  provides: [ISingletonProvider],
};

export default extension;
