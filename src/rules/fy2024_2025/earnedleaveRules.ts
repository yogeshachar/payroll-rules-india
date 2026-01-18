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

export const elAllowanceRule: Rule = {
  ruleCode: "EL_ALLOWANCE",
  name: "Earned Leave Allowance",
  category: "Earning",
  type: "Statutory",
  version: "FY2024-2025",
  description: "EL allowance calculated as 5% of (Basic + Dearness Allowance).",
  condition: "basicPlusDA > 0",
  monthlyFormula: "round(basicPlusDA * 0.05, 0)",
  annualFormula: "round(basicPlusDA * 0.05 * 12, 2)",
};
