import { Rule } from "../../utils/types";

export const otherDeductionsRule: Rule = {
  ruleCode: "OTHER_DEDUCTIONS",
  name: "Other Deductions",
  category: "Deduction",
  type: "Custom",
  version: "FY2024-2025",
  description: "Other Deductions (manual or fixed amount)",
  condition: "true",
  monthlyFormula: "0",
  annualFormula: "0",
};
