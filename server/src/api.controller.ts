import { NextFunction, Request, Response } from "express";
import { myFakeServerDatabase, saveDB } from "./meal";

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
  myFakeServerDatabase.push(data);
  saveDB();
  res.status(201).json(data);
};

//TODO?
// middlelayer that auto saves in json??
