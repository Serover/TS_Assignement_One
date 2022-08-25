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

  const data = req.body;
  const valiRes = mealValidation(data);

  if (valiRes[0] == false) {
    res.status(valiRes[1]!).json(valiRes[2]);
    return;
  }

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

  const valiRes = mealValidation(data);
  if (valiRes[0] == false) {
    res.status(valiRes[1]!).json(valiRes[2]);
    return;
  }

  let newmeal = createMeal(data);
  myFakeServerDatabase.push(newmeal);
  saveDB();

  res.status(201).json(newmeal);
};

function mealValidation(data: any): [boolean, number?, string?] {
  const validationBody: MealDTO = data;

  if (!validationBody.name) {
    return [false, 400, "name is required"];
  }

  if (!validationBody.calories) {
    return [false, 400, "calories is required"];
  }
  if (isNaN(Number(validationBody.calories))) {
    return [false, 400, "calories must be a number"];
  }

  if (!validationBody.protein) {
    return [false, 400, "protein is required"];
  }
  if (isNaN(Number(validationBody.protein))) {
    return [false, 400, "protein must be a number"];
  }

  return [true];
}
