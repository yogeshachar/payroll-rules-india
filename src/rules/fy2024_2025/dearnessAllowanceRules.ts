import { Rule } from "../../utils/types";

export const dailyDARule: Rule = {
  ruleCode: "DA",
  name: "Dearness Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Dearness Allowance calculated at a fixed rate of Rs.266 per payable day.",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 266, 0)",
  annualFormula: "round(payableDays * 266 * 12, 0)",
};
