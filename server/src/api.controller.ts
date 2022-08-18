import { NextFunction, Request, Response } from "express";
import { myFakeServerDatabase } from "./Meal";

export function updateMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;
  // TODO body validation?
  const data = req.body;

  //if ID exists
  for (let i = 0; i < myFakeServerDatabase.length; i++) {
    if (id === myFakeServerDatabase[i].id) {
      //TODO async + save to local etc etc
      myFakeServerDatabase[i] = data;

      res.status(200).json(myFakeServerDatabase[i]);
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
  myFakeServerDatabase.push(data);
  res.status(201).json(data);
};

//TODO?
// middlelayer that auto saves in json??
