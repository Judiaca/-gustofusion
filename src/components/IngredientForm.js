import { useState } from "react";

const IngredientForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [flavorProfile, setFlavorProfile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIngredient = {
      name,
      flavor_profile: flavorProfile.split(",").map((item) => item.trim()),
    };

    const response = await fetch("/api/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIngredient),
    });

    const data = await response.json();
    onAdd(data);
    setName("");
    setFlavorProfile("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Zutat"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Geschmacksprofile (kommagetrennt)"
        value={flavorProfile}
        onChange={(e) => setFlavorProfile(e.target.value)}
        required
      />
      <button type="submit">Zutat hinzufügen</button>
    </form>
  );
};

export default IngredientForm;
