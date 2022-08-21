const apiURL = 3000;

export function generateFoodUI() {
  console.log("FOOD UI GENERATED");
  const app = document.querySelector<HTMLDivElement>("#app");

  const foodDiv = document.createElement("div");
  foodDiv.classList.add("meal");

  const foodStats = document.createElement("div");
  foodStats.classList.add("foodStats");

  const name = document.createElement("i");
  name.innerHTML = "Gryta";
  const protein = document.createElement("i");
  protein.innerHTML = "100";
  const calories = document.createElement("i");
  calories.innerHTML = "200";

  foodStats.append(name);
  foodStats.append(protein);
  foodStats.append(calories);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  //---------- buttons etc --------------------
  const editButton = document.createElement("i");
  editButton.classList.add("far");
  editButton.classList.add("fa-edit");
  //editButton.addEventListener("click", () => editTodo(allSameDateTodos[i]));

  const removeButton = document.createElement("i");
  removeButton.classList.add("fa-regular");
  removeButton.classList.add("fa-trash-can");
  //  removeButton.addEventListener("click", () =>
  //    removeTodo(dataContainer, allSameDateTodos[i])
  //  );

  buttons.append(editButton);
  buttons.append(removeButton);

  foodDiv.append(foodStats);
  foodDiv.append(buttons);

  app?.append(foodDiv);
}
