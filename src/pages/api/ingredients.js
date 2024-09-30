import dbConnect from "\u0000@/utils/dbConnect";
import Ingredient from "\u0000@/models/Ingredient";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const ingredients = await Ingredient.find({});
      return res.status(200).json(ingredients);
    case "POST":
      const newIngredient = new Ingredient(req.body);
      await newIngredient.save();
      return res.status(201).json(newIngredient);

    // Hier kannst du PUT und DELETE hinzufügen

    default:
      return res.status(405).end(); // Methode nicht erlaubt
  }
}
