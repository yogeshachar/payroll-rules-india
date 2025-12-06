import { Rule } from "../../utils/types";

export const specialAllowanceRule: Rule = {
  ruleCode: "SPECIAL_ALLOWANCE",
  name: "Special Allowance",
  category: "Earning",
  version: "FY2024-2025",
  description: "Residual component after mandatory allocations",
  condition: "ctc > 0",
  monthlyFormula:
    "round((ctc / 12) - (basic + hra + conveyance + da + gratuity + pf + esi), 2)",
  annualFormula:
    "round(ctc - ((basic + hra + conveyance + da + gratuity + pf + esi) * 12), 2)",
};

// Special Allowance: 22 rupees per day * worked days
export const specialAllowanceDailyRule: Rule = {
  ruleCode: "SPECIAL_ALLOWANCE_DAILY",
  name: "Special Allowance - Daily Rate",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Special Allowance = 22 rupees per day * worked days (payable days)",
  condition: "payableDays > 0",
  monthlyFormula: "round(22 * payableDays, 2)",
  annualFormula: "round(22 * payableDays * 12, 2)",
};