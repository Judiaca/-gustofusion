import { useEffect, useState } from "react";
import IngredientForm from "../components/IngredientForm"; // Importiere das Formular

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch("/api/ingredients");
      const data = await response.json();
      setIngredients(data);
    };

    fetchIngredients();
  }, []);

  const addIngredient = (ingredient) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  return (
    <div>
      <h1>Zutatenübersicht</h1>
      <IngredientForm onAdd={addIngredient} /> {/* Füge das Formular hinzu */}
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsPage;
