import mongoose from "mongoose";

const CombinationSchema = new mongoose.Schema(
  {
    ingredients: { type: [mongoose.Schema.Types.ObjectId], ref: "Ingredient" },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Combination ||
  mongoose.model("Combination", CombinationSchema);
