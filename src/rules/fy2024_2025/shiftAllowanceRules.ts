import { Rule } from "../../utils/types";

// Shift Allowance: payable days * 17.16 rupee per day
export const shiftAllowanceRule: Rule = {
  ruleCode: "SHIFT_ALLOWANCE",
  name: "Shift Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Shift Allowance = payable days * 17.16 rupee per day",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 17.16, 2)",
  annualFormula: "round(payableDays * 17.16 * 12, 2)",
};

// Shift Allowance: payable days * 11.50 rupee per day
export const shiftAllowanceRuleNew: Rule = {
  ruleCode: "SHIFT_ALLOWANCE_NEW",
  name: "Shift Allowance -new ",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Shift Allowance = payable days * 11.50 rupee per day",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 11.50, 2)",
  annualFormula: "round(payableDays * 11.50 * 12, 2)",
};

export const shiftAllowanceRuleTierA: Rule = {
  ruleCode: "SHIFT_ALLOWANCE_TIER_A",
  name: "Shift Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Shift Allowance calculated as 7.5% of wage rate multiplied by shift days.",
  condition: "shiftDays > 0",
  monthlyFormula: "round((dailyWages * 0.075) * shiftDays, 0)",
};

export const nightShiftAllowanceRuleTierB: Rule = {
  ruleCode: "NIGHT_SHIFT_ALLOWANCE",
  name: "Night Shift Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "shift allowance calculated at Rs.6.15 per night shift day.",
  condition: "shiftDays > 0",
  monthlyFormula: "round(shiftDays * 6.15, 2)",
};

