import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    flavor_profile: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Ingredient ||
  mongoose.model("Ingredient", IngredientSchema);
