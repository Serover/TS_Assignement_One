const portNumb: number = 3000;
const baseApiUrl: string = "/api/v1/";

import express, { Request } from "express";
import { initalizeDB, saveDB } from "./Meal";
import { getAllMeals, updateMeal, deleteMeal, addMeal } from "./api.controller";

initalizeDB();
saveDB();

const app = express();
app.use(express.json());

app.get(baseApiUrl, getAllMeals);
// app.get(baseApiUrl + ":id", getAllMeals) or Specific func?
app.post(baseApiUrl, addMeal);
app.put(baseApiUrl + ":id", updateMeal);
app.delete(baseApiUrl + ":id", deleteMeal);

app.listen(portNumb, () =>
  console.log("Running on: http://localhost:" + portNumb)
);
