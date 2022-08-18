import { NextFunction, Request, Response } from "express";

let myFakeServerDatabase: Meal[] = [
  //TODO Make load from Json here insted?
  { id: 0, name: "Kyckling gryta", protein: 40, calories: 1050 },
  { id: 1, name: "Pew Pew", protein: 60, calories: 1200 },
];

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
    } else {
      //TODO if entity is same 204?
      res.status(404);
    }
  }
}

export function deleteMeal(req: Request<{ id: string }>, res: Response) {
  const id: number = +req.params.id;
  // TODO body validation?

  //if ID exists
  for (let i = 0; i < myFakeServerDatabase.length; i++) {
    if (id === myFakeServerDatabase[i].id) {
      const deletedData = myFakeServerDatabase[i];
      myFakeServerDatabase.splice(i, 1);

      res.status(200).json(deletedData);
    } else {
      res.status(404);
    }
  }
}

export function getAllMeals(req: Request, res: Response) {
  res.status(200).json(myFakeServerDatabase);
}

export const addMeal = (req: Request, res: Response) => {
  const data = req.body;
  // TODO save
  res.status(201).json(data);
};

//TODO?
// middlelayer that auto saves in json??
