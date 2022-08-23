import {
  Meal,
  MealDTO,
  createMeal,
  editMeal,
  generateFoodUI,
  cleanFoodUI,
  getMeal,
} from "./food";

// interface formElement extends HTMLFormElement {
//   name?: string;
//   protein?: number;
//   calories?: number;
// }

export function closeForm() {
  const form = document.querySelector<HTMLElement>(".form-popup");
  form!.style.display = "none";
}

let alterId: number;
export const toDoForm = document.querySelector<HTMLFormElement>("#todo-form");

export const searchForm =
  document.querySelector<HTMLFormElement>("#search-form");

// OPTIONAL PARAMETER
export function openForm(meal?: Meal) {
  const submitFormButton = document.querySelector<HTMLElement>(".submitTodo");
  const doc = document.querySelector<HTMLElement>(".form-popup");
  doc!.style.display = "block";

  const main = document.querySelector(".content-container");

  const form = doc?.firstElementChild as HTMLFormElement;
  var elements = form.elements;
  // var elements: formElement = <formElement>form.elements;

  // is Add
  if (meal == null) {
    submitFormButton!.innerHTML = "Submit";
    console.log("ADDING");
    toDoForm!.onsubmit = handleFormSubmit;

    elements["_name"] = undefined;
    elements["protein"] = undefined;
    elements["calories"] = undefined;

    // elements._name.value = undefined;
    // elements["protein"].value = undefined;
    // elements["calories"].value = undefined;
  }
  // is Edit
  else {
    submitFormButton!.innerHTML = "Save";
    // Set values to prev values
    console.log("EDITING");
    toDoForm!.onsubmit = handleEditFormSubmit;

    alterId = meal.id;
    elements["name"].value = meal.name;
    elements["protein"].value = meal.protein;
    elements["calories"].value = meal.calories;

    // elements["_name"] = meal.name;
    // elements["protein"] = meal.protein;
    // elements["calories"] = meal.protein;
  }
}

const openFormButton = document.querySelector(".add");
openFormButton?.addEventListener("click", () => {
  openForm();
});

const closeFormButton = document.querySelector(".closeTodoForm");
closeFormButton?.addEventListener("click", () => {
  closeForm();
});

export async function handleSearchFormSubmit(e: any) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const id: number = formProps.id;

  let fetchFood: Meal = await getMeal(id);
  console.log(fetchFood);

  let fetchFoodAsArray: Meal[] = [
    {
      id: fetchFood.id,
      name: fetchFood.name,
      protein: fetchFood.protein,
      calories: fetchFood.calories,
    },
  ];

  cleanFoodUI();
  generateFoodUI(fetchFoodAsArray);
}

export function handleFormSubmit(e: any) {
  e.preventDefault();
  console.log("SUBMIT  RUN");

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  let newMeal: MealDTO = {
    name: formProps.name,
    protein: formProps.protein,
    calories: formProps.calories,
  };

  createMeal(newMeal);
}

export function handleEditFormSubmit(e: any) {
  e.preventDefault();
  console.log("EDIT FORMR RUNNN");

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  console.log("formprops");
  console.log(formProps);

  let newMeal: Meal = {
    id: alterId,
    name: formProps.name,
    protein: formProps.protein,
    calories: formProps.calories,
  };

  editMeal(newMeal);
}
