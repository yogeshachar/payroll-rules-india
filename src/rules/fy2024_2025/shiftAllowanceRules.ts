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

