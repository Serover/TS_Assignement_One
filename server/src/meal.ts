type Meal = {
  id: number;
  name: string;
  protein: number;
  calories: number;
};

type MealDTO = {
  name: string;
  protein: number;
  calories: number;
};

// put DB here?
//TODO this
function createMeal(meal: MealDTO) {
  let uniqueIdMeal: Meal = {
    id: 0,
    name: meal.name,
    protein: meal.protein,
    calories: meal.calories,
  };
  // give it real ID

  return uniqueIdMeal;
}
