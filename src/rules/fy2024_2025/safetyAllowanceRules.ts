import { Rule } from "../../utils/types";

export const safetyEarningsRule: Rule = {
  ruleCode: "SAFETY_EARNINGS_tier_one",
  name: "Safety Earnings-tier-one",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Safety Earnings = (674 * 1%) * payableDays. Calculated based on payable days.",
  condition: "payableDays > 0",
  monthlyFormula: "round((674 * 0.01) * payableDays, 2)",
  annualFormula: "round((674 * 0.01) * payableDays * 12, 2)",
};
