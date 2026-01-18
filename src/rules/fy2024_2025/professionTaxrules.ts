import { Rule } from "../../utils/types";

export const ProfessionTaxFixed: Rule = {
  ruleCode: "PT_FIXED",
  name: "Fixed_PT",
  category: "Deduction",
  version: "FY2024-2025",
  description: "Fixed Profession Tax of 200 ₹",
  condition: "true",
  monthlyFormula:
    "200",
  annualFormula: `200 * 12`,
};
