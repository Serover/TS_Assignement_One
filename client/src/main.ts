import "./style.css";

import { fetchAllMeals, generateFoodUI, editMeal, createMeal } from "./food";
import {
  handleFormSubmit,
  toDoForm,
  openForm,
  searchForm,
  handleSearchFormSubmit,
} from "./form";

async function main() {
  await fetchAllMeals();
  await generateFoodUI();
  bindEventHandeler();
  bindAddMealButton();
}

function bindEventHandeler() {
  toDoForm!.onsubmit = handleFormSubmit;
  searchForm!.onsubmit = handleSearchFormSubmit;
}

function bindAddMealButton() {
  const addMealButton = document.querySelector<HTMLElement>(".openForm");
  addMealButton?.addEventListener("click", () => {
    openForm();
  });
}

main();

//TODO, cleanup comments
//TODO fix naming in html, aka todo -> search / meal
//TODO error handling??
