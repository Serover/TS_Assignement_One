const portNumb: number = 3000;
const baseApiUrl: string = "/api/v1/";

import express, { Request } from "express";
import { initalizeDB } from "./Meal";
import {
  getAllMeals,
  updateMeal,
  deleteMeal,
  addMeal,
  getASpecificMeal,
} from "./api.controller";

initalizeDB();

const app = express();
app.use(express.json());

app.get(baseApiUrl, getAllMeals);
app.get(baseApiUrl + ":id", getASpecificMeal);
app.post(baseApiUrl, addMeal);
app.put(baseApiUrl + ":id", updateMeal);
app.delete(baseApiUrl + ":id", deleteMeal);

app.listen(portNumb, () =>
  console.log("Running on: http://localhost:" + portNumb)
);
