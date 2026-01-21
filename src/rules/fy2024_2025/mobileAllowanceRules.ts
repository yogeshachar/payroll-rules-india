import { Rule } from "../../utils/types";

// Mobile Allowance: 10 rupee per day * worked days
export const mobileAllowanceRule: Rule = {
  ruleCode: "MOBILE_ALLOWANCE",
  name: "Mobile Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Mobile Allowance = 10 rupee per day * worked days",
  condition: "payableDays > 0",
  monthlyFormula: "round(10 * payableDays, 2)",
  annualFormula: "round(10 * payableDays * 12, 2)",
};

// Mobile Allowance: 500 / no. of working days * worked days
export const mobileAllowance500Rule: Rule = {
  ruleCode: "MOBILE_ALLOWANCE_500",
  name: "Mobile Allowance - ₹500 P.M",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Mobile Allowance @ 500/- P.M = 500 / no. of working days * worked days",
  condition: "workingDaysInMonth > 0 && payableDays > 0",
  monthlyFormula: "round((500 / workingDaysInMonth) * payableDays, 2)",
  annualFormula: "round(((500 / workingDaysInMonth) * payableDays) * 12, 2)",
};
export const mobileAllowanceRuleTierB: Rule = {
  ruleCode: "MOBILE_ALLOWANCE_TIER_B",
  name: "Mobile Allowance - ₹19.23 per day",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Mobile Allowance = 19.23 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(19.23 * payableDays, 2)",
  annualFormula: "round(19.23 * payableDays, 2)",
};
export const mobileAllowanceMonthlyProratedRule: Rule = {
  ruleCode: "MOBILE_ALLOWANCE_MONTHLY_PRORATED",
  name: "Mobile Allowance – Monthly Prorated (₹1250)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Mobile allowance prorated based on payable days: (₹1250 / workingDaysInMonth) × payableDays",
  condition: "payableDays > 0 && workingDaysInMonth > 0",
  monthlyFormula: "round((1250 / workingDaysInMonth) * payableDays, 0)",
  annualFormula: "round((1250 / workingDaysInMonth) * payableDays, 0)",
};
export const mobileAllowaceTierC: Rule = {
  ruleCode: "MOBILE_Allowance_TIER_C",
  name: "Mobile Allowance (MB) - ₹8.93 per day",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Mobile Allowance = 8.93 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(8.93 * payableDays, 2)",
  annualFormula: "round(8.93 * payableDays, 2)",
};

export const mobileAllowaceTierD: Rule = {
  ruleCode: "MOBILE_Allowance_TIER_D",
  name: "Mobile Allowance (MB) - ₹56.94 per day",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Mobile Allowance = 56.94 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(56.94 * payableDays, 2)",
  annualFormula: "round(56.94 * payableDays, 2)",
};
