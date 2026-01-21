import { Rule } from "../../utils/types";

export const jaggeryAllowanceRule: Rule = {
  ruleCode: "JAGGERY_ALLOWANCE",
  name: "Jaggery Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Jaggery allowance calculated at Rs.5 per payable day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 5, 0)",
};
