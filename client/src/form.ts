import {
  Meal,
  MealDTO,
  createMeal,
  editMeal,
  generateFoodUI,
  cleanFoodUI,
  getMeal,
} from "./food";

interface formElement extends HTMLCollection {
  name?: HTMLInputElement;
  protein?: HTMLInputElement;
  calories?: HTMLInputElement;
}

// --------- IMPORTANT CONSTANT ---------
let alterId: number;
export const mealForm = document.querySelector<HTMLFormElement>("#meal-form");
export const searchForm =
  document.querySelector<HTMLFormElement>("#search-form");
// --------- IMPORTANT END  --------------

export function closeForm() {
  const form = document.querySelector<HTMLElement>(".form-popup");
  form!.style.display = "none";
}

// OPTIONAL PARAMETER
// If open with no meal -> Create new meal
// If open with meal -> Edit meal
export function openForm(meal?: Meal) {
  const submitFormButton = document.querySelector<HTMLElement>(".submitMeal");
  const doc = document.querySelector<HTMLElement>(".form-popup");
  doc!.style.display = "block";

  const form = doc?.firstElementChild as HTMLFormElement;
  var elements: formElement = <formElement>form.elements;

  // is Add Meal
  if (meal == null) {
    submitFormButton!.innerHTML = "Submit"; // Cosmetic
    mealForm!.onsubmit = handleFormSubmit;

    elements["name"]!.value = "";
    elements["protein"]!.value = "";
    elements["calories"]!.value = "";
  }
  // is Edit Meal
  else {
    submitFormButton!.innerHTML = "Save"; // Cosmetic
    mealForm!.onsubmit = handleEditFormSubmit;

    alterId = meal.id;
    elements["name"]!.value = meal.name;
    elements["protein"]!.value = meal.protein.toString();
    elements["calories"]!.value = meal.calories.toString();
  }
}

const openFormButton = document.querySelector(".add");
openFormButton?.addEventListener("click", () => {
  openForm();
});

const closeFormButton = document.querySelector(".closeMealForm");
closeFormButton?.addEventListener("click", () => {
  closeForm();
});

export async function handleSearchFormSubmit(e: SubmitEvent) {
  e.preventDefault();
  cleanFoodUI();

  let formData: FormData = new FormData(e.target as HTMLFormElement);
  const formProps = Object.fromEntries(formData.entries());
  const id = formProps.id;
  const numberId: number = +id.toString();

  let fetchFood: Meal = await getMeal(numberId);

  // Surley there's a better way to do it?
  let fetchFoodAsArray: Meal[] = [
    {
      id: fetchFood.id,
      name: fetchFood.name,
      protein: fetchFood.protein,
      calories: fetchFood.calories,
    },
  ];

  generateFoodUI(fetchFoodAsArray);
}

export function handleFormSubmit(e: SubmitEvent) {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);
  const formProps = Object.fromEntries(formData);

  let newMeal: MealDTO = {
    name: formProps.name.toString(),
    protein: +formProps.protein.toString(),
    calories: +formProps.calories.toString(),
  };

  createMeal(newMeal);
}

export function handleEditFormSubmit(e: SubmitEvent) {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);
  const formProps = Object.fromEntries(formData);

  let newMeal: Meal = {
    id: alterId,
    name: formProps.name.toString(),
    protein: +formProps.protein.toString(),
    calories: +formProps.calories.toString(),
  };

  editMeal(newMeal);
}
