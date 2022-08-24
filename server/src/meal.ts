export type Meal = {
  id: number;
  name: string;
  protein: number;
  calories: number;
};

export type MealDTO = {
  name: string;
  protein: number;
  calories: number;
};

import { promises as fs } from "fs";

export let myFakeServerDatabase: Meal[] = [];
const dir = "../JsonSaveData.json";

export async function initalizeDB() {
  let jsonString = (await fs.readFile(dir)).toString();

  // cba validate the json save file
  if (jsonString.length > 0) {
    console.log(jsonString);

    let data = JSON.parse(jsonString);

    myFakeServerDatabase = data;
  }
}

export async function saveDB() {
  const jsonData = JSON.stringify(myFakeServerDatabase);
  await fs.writeFile(dir, jsonData);
}

export function createMeal(meal: MealDTO) {
  let uniqueIdMeal: Meal = {
    id: 0,
    name: meal.name,
    protein: +meal.protein,
    calories: +meal.calories,
  };
  // Very naive unique ID but works due to small reasons such as
  // last object is always the largest object in this case
  if (myFakeServerDatabase.length > 0) {
    let numb = myFakeServerDatabase[myFakeServerDatabase.length - 1].id;
    numb++;
    uniqueIdMeal.id = numb;
  }

  return uniqueIdMeal;
}
