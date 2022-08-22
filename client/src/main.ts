import "./style.css";

import { fetchData, generateFoodUI, editMeal, createMeal } from "./food";
import { handleFormSubmit, toDoForm, openForm } from "./form";

async function main() {
  await fetchData();
  await generateFoodUI();
  bindEventHandeler();
  bindAddMealButton();
}

function bindEventHandeler() {
  toDoForm!.onsubmit = handleFormSubmit;
}

function bindAddMealButton() {
  const addMealButton = document.querySelector<HTMLElement>(".openForm");
  addMealButton?.addEventListener("click", () => {
    openForm();
  });
}

main();
