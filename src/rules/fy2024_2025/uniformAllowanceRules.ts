import { Rule } from "../../utils/types";

// Uniform Allowance - HSW: Rs. 60.63/- * payable days
export const uniformAllowanceHSWRule: Rule = {
  ruleCode: "UNIFORM_ALLOWANCE_HSW",
  name: "Uniform Allowance - HSW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Uniform Allowance (HSW) = Rs. 60.63/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'HSW'",
  monthlyFormula: "round(60.63 * payableDays, 2)",
  annualFormula: "round(60.63 * payableDays * 12, 2)",
};
export const uniformAllowanceRule: Rule = {
  ruleCode: "UNIFORM_ALLOWANCE_custom",
  name: "Uniform Allowance - custom",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Uniform Allowance  = Rs. 65.00/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'HSW'",
  monthlyFormula: "round(65 * payableDays, 2)",
  annualFormula: "round(65 * payableDays * 12, 2)",
};
// Uniform Allowance - SW: Rs. 45.76/- * payable days
export const uniformAllowanceSWRule: Rule = {
  ruleCode: "UNIFORM_ALLOWANCE_SW",
  name: "Uniform Allowance - SW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Uniform Allowance (SW) = Rs. 45.76/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'SW'",
  monthlyFormula: "round(45.76 * payableDays, 2)",
  annualFormula: "round(45.76 * payableDays * 12, 2)",
};

// Uniform Allowance - SSW: Rs. 38.90/- * payable days
export const uniformAllowanceSSWRule: Rule = {
  ruleCode: "UNIFORM_ALLOWANCE_SSW",
  name: "Uniform Allowance - SSW",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Uniform Allowance (SSW) = Rs. 38.90/- * payable days (worked days)",
  condition: "payableDays > 0 && employeeCategory === 'SSW'",
  monthlyFormula: "round(38.90 * payableDays, 2)",
  annualFormula: "round(38.90 * payableDays * 12, 2)",
};
