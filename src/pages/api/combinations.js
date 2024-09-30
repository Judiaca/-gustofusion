import dbConnect from "\u0000@/utils/dbConnect";
import Combination from "\u0000@/models/Combination";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const combinations = await Combination.find({});
      return res.status(200).json(combinations);
    case "POST":
      const newCombination = new Combination(req.body);
      await newCombination.save();
      return res.status(201).json(newCombination);

    // Hier kannst du PUT und DELETE hinzufügen

    default:
      return res.status(405).end();
  }
}
