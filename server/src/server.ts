const portNumb: number = 3000;

import express, { Request } from "express";
import { type } from "os";
const app = express();

type Meal = {
  id: number;
  name: string;
  protein: number;
  calories: number;
};

let myFakeServerDatabase: Meal[] = [
  //TODO Make load from Json here insted?
  { id: 0, name: "Kyckling gryta", protein: 40, calories: 1050 },
  { id: 1, name: "Pew Pew", protein: 60, calories: 1200 },
];

app.get("/", (req, res) => {
  console.log("Get Called");
  res.status(200).json(myFakeServerDatabase);
});

app.post("/", (req, res) => {
  console.log("Post Called");
});

app.put("/", (req, res) => {
  //if ID exists
  //code 200, update + return object
  // else
  // code 404
});

app.delete("/", (req: Request<{ id: string }>, res) => {
  //if ID exists
  //code 200, return object
  // delete object
  // else
  // code 404
});

app.listen(portNumb, () =>
  console.log("Running on: http://localhost:" + portNumb)
);
