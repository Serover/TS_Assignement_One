type Meal = {
  id: number;
  name: string;
  protein: number;
  calories: number;
};

const api_URL = "3000";
const apiV_Url = "api/";

let allMeals: Meal[];

export async function fetchData() {
  //TODO error handling
  console.log("FETCHING DATA");
  const response = await fetch("/api");
  const jsonData = await response.json();
  console.log(jsonData);
  allMeals = jsonData;
}

export function generateFoodUI() {
  console.log("FOOD UI GENERATING");
  //TODO error handling
  for (let i = 0; i < allMeals.length; i++) {
    const app = document.querySelector<HTMLDivElement>("#app");

    const foodDiv = document.createElement("div");
    foodDiv.classList.add("meal");

    const foodStats = document.createElement("div");
    foodStats.classList.add("foodStats");

    const name = document.createElement("i");
    name.innerHTML = allMeals[i].name;
    const protein = document.createElement("i");
    protein.innerHTML = allMeals[i].protein.toString();
    const calories = document.createElement("i");
    calories.innerHTML = allMeals[i].calories.toString();

    foodStats.append(name);
    foodStats.append(protein);
    foodStats.append(calories);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    //---------- buttons etc --------------------
    const editButton = document.createElement("i");
    editButton.classList.add("far");
    editButton.classList.add("fa-edit");
    editButton.addEventListener("click", () => editMeal(allMeals[i]));

    const removeButton = document.createElement("i");
    removeButton.classList.add("fa-regular");
    removeButton.classList.add("fa-trash-can");
    removeButton.addEventListener("click", () => removeMeal(allMeals[i]));
    //---------- buttons end --------------------

    buttons.append(editButton);
    buttons.append(removeButton);

    foodDiv.append(foodStats);
    foodDiv.append(buttons);

    app?.append(foodDiv);
  }
}

async function createMeal(meal: Meal) {}

async function editMeal(meal: Meal) {
  const response = await fetch("/api" + meal.id, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("DELETED OBJECT");
  }
}

async function removeMeal(meal: Meal) {
  const response = await fetch("/api" + meal.id, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("DELETED OBJECT");
  }
}
