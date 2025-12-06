import { Rule } from "../../utils/types";

// Allowance: Basic * 13%
export const generalAllowanceRule: Rule = {
  ruleCode: "GENERAL_ALLOWANCE",
  name: "Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Allowance = Basic * 13%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.13, 2)",
  annualFormula: "round(basic * 0.13 * 12, 2)",
};

