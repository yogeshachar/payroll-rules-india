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
  description: "Mobile Allowance @ 500/- P.M = 500 / no. of working days * worked days",
  condition: "workingDaysInMonth > 0 && payableDays > 0",
  monthlyFormula: "round((500 / workingDaysInMonth) * payableDays, 2)",
  annualFormula: "round(((500 / workingDaysInMonth) * payableDays) * 12, 2)",
};

