import { Rule } from "../../utils/types";

// Washing Allowance - HSW: Rs. 16.02/- * payable days
export const washingAllowanceHSWRule: Rule = {
  ruleCode: "WASHING_ALLOWANCE_HSW",
  name: "Washing Allowance - HSW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance (HSW) = Rs. 16.02/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'HSW'",
  monthlyFormula: "round(16.02 * payableDays, 2)",
  annualFormula: "round(16.02 * payableDays * 12, 2)",
};

// Washing Allowance - SW: Rs. 12.58/- * payable days
export const washingAllowanceSWRule: Rule = {
  ruleCode: "WASHING_ALLOWANCE_SW",
  name: "Washing Allowance - SW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance (SW) = Rs. 12.58/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'SW'",
  monthlyFormula: "round(12.58 * payableDays, 2)",
  annualFormula: "round(12.58 * payableDays * 12, 2)",
};

// Washing Allowance - SSW: Rs. 10.30/- * payable days
export const washingAllowanceSSWRule: Rule = {
  ruleCode: "WASHING_ALLOWANCE_SSW",
  name: "Washing Allowance - SSW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Washing Allowance (SSW) = Rs. 10.30/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'SSW'",
  monthlyFormula: "round(10.30 * payableDays, 2)",
  annualFormula: "round(10.30 * payableDays * 12, 2)",
};

