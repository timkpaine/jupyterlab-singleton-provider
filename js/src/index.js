import "../style/index.css";

async function activate(app) {
  // eslint-disable-next-line no-console
  console.log("JupyterLab extension jupyterlab-singleton-provider is activated!");
}

const extension = {
  activate,
  autoStart: true,
  id: "jupyterlab-singleton-provider",
  optional: [],
  requires: [],
};

export default extension;
export {activate as _activate};
