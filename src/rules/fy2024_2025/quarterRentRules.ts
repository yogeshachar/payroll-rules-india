import { Rule } from "../../utils/types";

export const quarterRentRule: Rule = {
  ruleCode: "QUARTER_RENT",
  name: "Quarter Rent",
  category: "Deduction",
  type: "Fixed",
  version: "FY2024-2025",
  description:
    "Flat quarter rent deduction applicable to all employee categories.",
  condition: "true",
  monthlyFormula: "498",
};
