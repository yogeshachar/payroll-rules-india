import { Rule } from "../../utils/types";

// RETURCH: basic * 4.11%
export const retrenchmentRule: Rule = {
  ruleCode: "RETRENCHMENT",
  name: "Retrenchment Charges",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retrenchment Charges = basic * 4.11%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0411, 2)",
  annualFormula: "round(basic * 0.0411 * 12, 2)",
};

