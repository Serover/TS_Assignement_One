import { Meal, MealDTO, createMeal, editMeal } from "./food";

export function closeForm() {
  const form = document.querySelector<HTMLElement>(".form-popup");
  form!.style.display = "none";
}

let alterId: number;
export const toDoForm = document.querySelector<HTMLFormElement>("#todo-form");

// OPTIONAL PARAMETER
export function openForm(meal?: Meal) {
  const submitFormButton = document.querySelector<HTMLElement>(".submitTodo");
  const doc = document.querySelector<HTMLElement>(".form-popup");
  doc!.style.display = "block";

  const main = document.querySelector(".content-container");

  const form = doc?.firstElementChild as HTMLFormElement;
  const elements = form?.elements;

  // is Add
  if (meal == null) {
    submitFormButton!.innerHTML = "Submit";
    console.log("ADDING");
    toDoForm!.onsubmit = handleFormSubmit;

    elements["name"].value = null;
    elements["protein"].value = null;
    elements["calories"].value = null;
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
