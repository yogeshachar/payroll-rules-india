import { Rule } from "../../utils/types";

export const localAllowanceRule: Rule = {
  ruleCode: "LOCAL_ALLOWANCE",
  name: "Local Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Local allowance calculated on a pro-rata basis at Rs.1800 per month divided by 26 working days.",
  condition: "payableDays > 0",
  monthlyFormula: "round((1800 / 26) * payableDays, 0)",
  annualFormula: "round(((1800 / 26) * payableDays) * 12, 0)",
};
