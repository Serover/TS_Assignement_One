import { NextFunction, Request, Response } from "express";
import {
  createMeal,
  myFakeServerDatabase,
  saveDB,
  MealDTO,
  Meal,
} from "./meal";

export function updateMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;

  // TODO body validation?
  const data = req.body;

  mealValidation(data, res);

  //if ID exists
  for (let i = 0; i < myFakeServerDatabase.length; i++) {
    if (id === myFakeServerDatabase[i].id) {
      let editedMeal: Meal = {
        id: id,
        name: data.name,
        protein: +data.protein,
        calories: +data.calories,
      };

      myFakeServerDatabase[i] = editedMeal;
      //Fail Safe
      //myFakeServerDatabase[i].id = id;

      res.status(200).json(myFakeServerDatabase[i]);
      saveDB();
      return;
    }
  }
  res.status(404).json("NOT FOUND");
}

export function deleteMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;

  //if ID exists
  for (let i = 0; i < myFakeServerDatabase.length; i++) {
    if (id === myFakeServerDatabase[i].id) {
      const deletedData = myFakeServerDatabase[i];
      myFakeServerDatabase.splice(i, 1);

      res.status(200).json(deletedData);
      saveDB();
      return;
    }
  }

  res.status(404).json("NOT FOUND");
}

export function getASpecificMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;

  for (let i = 0; i < myFakeServerDatabase.length; i++) {
    if (id === myFakeServerDatabase[i].id) {
      res.status(200).json(myFakeServerDatabase[i]);
      return;
    }
  }

  res.status(404).json("NOT FOUND");
}

export function getAllMeals(req: Request, res: Response) {
  res.status(200).json(myFakeServerDatabase);
}

export const addMeal = (req: Request, res: Response) => {
  const data = req.body;

  mealValidation(data, res);

  let newmeal = createMeal(data);

  myFakeServerDatabase.push(newmeal);
  saveDB();
  res.status(201).json(newmeal);
};

function mealValidation(data: any, res: Response<any, Record<string, any>>) {
  const validationBody: MealDTO = data;

  if (!validationBody.name) {
    res.status(400).send("name is required");
  }

  if (!validationBody.calories) {
    res.status(400).send("calories is required");
  }
  if (isNaN(Number(validationBody.calories))) {
    res.status(400).send("calories must be a number");
  }

  console.log(Number(validationBody.calories));

  if (!validationBody.protein) {
    res.status(400).send("protein is required");
  }
  if (isNaN(Number(validationBody.protein))) {
    res.status(400).send("protein must be a number");
  }
}
