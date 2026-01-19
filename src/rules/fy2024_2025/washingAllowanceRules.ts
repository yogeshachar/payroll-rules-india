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

export const washingAllowanceUSWRuleTierD: Rule = {
  ruleCode: "WASHING_ALLOWANCE_USW",
  name: "Washing Allowance (USW)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing allowance for USW category at Rs.25 per present day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 25, 2)",
};

export const washingAllowanceUSWRuleTierE: Rule = {
  ruleCode: "WASHING_ALLOWANCE_SW",
  name: "Washing Allowance (SW)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing allowance for SW category at Rs.35 per present day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 35, 2)",
};

export const washingAllowanceUSWRuleTierF: Rule = {
  ruleCode: "WASHING_ALLOWANCE",
  name: "Washing Allowance At ₹44",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing allowance for SW category at Rs.44 per present day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 44, 2)",
};

export const washingAllowanceUSWRuleTierG: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_G",
  name: "Washing Allowance At ₹5.44",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing allowance for category at Rs.5.44 per present day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 5.44, 2)",
};
export const washingAllowanceTierH: Rule = {
  ruleCode: "WASHING_ALLOWANCE_TIER_H",
  name: "Washing Allowance – Tier H",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance = Rs. 10 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(10 * payableDays, 2)",
  annualFormula: "round(10 * payableDays * 12, 2)",
};

export const washingAllowanceDailyRule: Rule = {
  ruleCode: "WASHING_ALLOWANCE_DAILY",
  name: "Washing Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing allowance calculated at Rs.41 per payable day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 41, 0)",
};
