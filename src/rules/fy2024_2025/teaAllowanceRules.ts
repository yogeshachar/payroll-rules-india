import { Rule } from "../../utils/types";

// Tea Allowance: 544 * No of payable days
export const teaAllowanceRule: Rule = {
  ruleCode: "TEA_ALLOWANCE",
  name: "Tea Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Tea Allowance = 544 * No of payable days",
  condition: "payableDays > 0",
  monthlyFormula: "round(544 * payableDays, 2)",
  annualFormula: "round(544 * payableDays * 12, 2)",
};

