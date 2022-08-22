import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { fetchData, generateFoodUI } from "./food";
import { defineConfig } from "vite";

await fetchData();
await generateFoodUI();
