import { h } from "preact";
import render from "preact-render-to-string";
import { App } from "client/App";

export const renderApp = async () => {
  return {
    html: render(<App />),
  };
};
