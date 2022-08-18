type Meal = {
  id: number;
  name: string;
  protein: number;
  calories: number;
};

type MealDTO = {
  name: string;
  protein: number;
  calories: number;
};

const dir = "../JsonSaveData.json";

import { promises as fs } from "fs";

export let myFakeServerDatabase: Meal[];

export async function initalizeDB() {
  let jsonString = (await fs.readFile(dir)).toString();
  let data = JSON.parse(jsonString);
  console.log(data);

  myFakeServerDatabase = data;
  console.log("DB loaded");
}

export async function saveDB() {
  const jsonData = JSON.stringify(myFakeServerDatabase);
  await fs.writeFile(dir, jsonData);
  console.log("DB saved");
}

//TODO this
function createMeal(meal: MealDTO) {
  let uniqueIdMeal: Meal = {
    id: 0,
    name: meal.name,
    protein: meal.protein,
    calories: meal.calories,
  };
  uniqueIdMeal.id = myFakeServerDatabase.length;

  return uniqueIdMeal;
}
