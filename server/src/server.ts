const portNumb: number = 3000;
const apiName: string = "/api/v1/";

let myFakeServerDatabase: Meal[] = [
  //TODO Make load from Json here insted?
  { id: 0, name: "Kyckling gryta", protein: 40, calories: 1050 },
  { id: 1, name: "Pew Pew", protein: 60, calories: 1200 },
];

import express, { Request } from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Get Called");
  res.status(200).json(myFakeServerDatabase);
});

app.post("/", (req, res) => {
  console.log("Post Called");
});

app.put("/:id", (req: Request<{ id: string }>, res) => {
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
      // Some1 on the interet said 204 > 404
      res.status(204);
    }
  }
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
