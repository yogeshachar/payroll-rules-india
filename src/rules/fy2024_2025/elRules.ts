import { Rule } from "../../utils/types";

// EL: Basic * 5%
export const elRule: Rule = {
  ruleCode: "EL",
  name: "EL (Earned Leave Allowance)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "EL = Basic * 5%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.05, 2)",
  annualFormula: "round(basic * 0.05 * 12, 2)",
};

