import { Rule } from "../../utils/types";

// Emergency Allowance - Rs. 27.46/- per payable day
export const emergencyAllowanceRule: Rule = {
  ruleCode: "EMERGENCY_ALLOWANCE",
  name: "Emergency Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Emergency Allowance = Rs. 27.46/- × payable days (worked days)",
  condition: "payableDays > 0",
  monthlyFormula: "round(27.46 * payableDays, 2)",
  annualFormula: "round(27.46 * payableDays * 12, 2)",
};
