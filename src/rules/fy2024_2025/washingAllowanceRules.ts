import { Rule } from "../../utils/types";
export const washingAllowanceTierA: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_A",
  name: "Washing Allowance – Tier A",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance = Rs. 16.02 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(16.02 * payableDays, 2)",
  annualFormula: "round(16.02 * payableDays * 12, 2)",
};

export const washingAllowanceTierB: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_B",
  name: "Washing Allowance – Tier B",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance = Rs. 12.58 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(12.58 * payableDays, 2)",
  annualFormula: "round(12.58 * payableDays * 12, 2)",
};

export const washingAllowanceTierC: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_C",
  name: "Washing Allowance – Tier C",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance = Rs. 10.30 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(10.30 * payableDays, 2)",
  annualFormula: "round(10.30 * payableDays * 12, 2)",
};

export const washingAllowanceTierCRevised: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_C_REVISED",
  name: "Washing Allowance – Tier C (Revised Rate)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance = Rs. 11.50 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(11.50 * payableDays, 2)",
  annualFormula: "round(11.50 * payableDays * 12, 2)",
};
