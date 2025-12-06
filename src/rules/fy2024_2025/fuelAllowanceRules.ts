import { Rule } from "../../utils/types";

// Fuel Allowance: 50 * payable days
export const fuelAllowanceRule: Rule = {
  ruleCode: "FUEL_ALLOWANCE",
  name: "Fuel Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Fuel Allowance Per day Rs. 50 = 50 * payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(50 * payableDays, 2)",
  annualFormula: "round(50 * payableDays * 12, 2)",
};

