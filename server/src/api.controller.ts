import { Request, Response } from "express";
import {
  createMeal,
  myFakeServerDatabase,
  saveDB,
  Meal,
  isMealDTO,
} from "./meal";

export function updateMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;
  const data = req.body;

  try {
    if (isMealDTO(data)) {
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
    }
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) {
      res.status(400).json(err.message);
      return;
    }
  }

  res.status(404).json("NOT FOUND");
}

export function deleteMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;

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
  try {
    if (isMealDTO(data)) {
      let newmeal = createMeal(data);
      myFakeServerDatabase.push(newmeal);
      saveDB();

      res.status(201).json(newmeal);
    }
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) {
      res.status(400).json(err.message);
      return;
    }
  }
};
