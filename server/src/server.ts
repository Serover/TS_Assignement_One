const portNumb: number = 3000;
const apiName: string = "/api/v1/";

import express, { Request } from "express";
import { getAllMeals, updateMeal, deleteMeal, addMeal } from "./api.controller";

const app = express();
app.use(express.json());

app.get("/", getAllMeals);
app.post("/", addMeal);
app.put("/:id", updateMeal);
app.delete("/:id", deleteMeal);

app.listen(portNumb, () =>
  console.log("Running on: http://localhost:" + portNumb)
);
