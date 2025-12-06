import { Rule } from "../../utils/types";

export const profTaxRule: Rule = {
  ruleCode: "PT",
  name: "Professional Tax",
  category: "Deduction",
  version: "FY2024-2025",
  type: "Statutory",
  description: "₹200 per month if gross > ₹15,000",
  condition: "gross > 15000",
  monthlyFormula: "200",
  annualFormula: "2400",
};
