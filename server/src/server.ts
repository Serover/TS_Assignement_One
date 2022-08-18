const portNumb: number = 3000;

import express from "express";
const app = express();

let myFakeObject: {
  id: number;
  name: string;
  age: number;
  birthday: number;
}[] = [
  //TODO Make load from Json here insted?
  { id: 0, name: "Available", age: 20, birthday: 1990 },
  { id: 1, name: "Ready", age: 20, birthday: 1990 },
];

app.get("/", (req, res) => {
  console.log("Get Called");
  res.status(200).json(myFakeObject);
});

app.post("/", (req, res) => {
  console.log("Post Called");
});

app.put("/", (req, res) => {
  console.log("Put Called");
});

app.delete("/", (req, res) => {
  console.log("Delete Called");
});

app.listen(portNumb, () =>
  console.log("Running on: http://localhost:" + portNumb)
);
