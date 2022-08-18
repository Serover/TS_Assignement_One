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

import { fsync, readFileSync, writeFileSync } from "fs";
import { promises as fs } from "fs";
import { json } from "stream/consumers";
//var fs = require("fs");

export let myFakeServerDatabase: Meal[];

export function initalizeDB() {
  myFakeServerDatabase = [
    //TODO Make load from Json here insted?
    { id: 0, name: "Kyckling gryta", protein: 40, calories: 1050 },
    { id: 1, name: "Pew Pew", protein: 60, calories: 1200 },
  ];
}

export async function saveDB() {
  //TODO save to json localy
  const jsonData = JSON.stringify(myFakeServerDatabase);
  console.log(jsonData);
  const dir = "../JsonSaveData.json";

  //fs.writeFileSync(dir, jsonData);
  await fs.writeFile(dir, jsonData);
}

// put DB here?
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
