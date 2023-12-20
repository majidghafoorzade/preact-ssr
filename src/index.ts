import express, { Express, Request, Response } from "express";
import dotEnv from "dotenv";
import { renderApp } from "server/providers/renderApp";

// Init env variables
dotEnv.config();

// Get env vars
const PORT: number = parseInt(process.env.APP_PORT ?? "8080");

// Create Express server instance
const app: Express = express();

// Config template engine
app.set("view engine", "hbs");
app.set("views", "./src/server/views");

// Create Wildcard route
app.get("/*", async function (req: Request, res: Response) {
  const { html } = await renderApp();

  res.render("application.hbs", {
    html,
  });
});

// Run Express server
app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`);
});
