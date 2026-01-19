import { Rule } from "../../utils/types";

export const safetyEarningsRule: Rule = {
  ruleCode: "SAFETY_EARNINGS_TIER_ONE",
  name: "Safety Earnings-Tier-One",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Safety Earnings = (674 * 1%) * payableDays. Calculated based on payable days.",
  condition: "payableDays > 0",
  monthlyFormula: "round((674 * 0.01) * payableDays, 2)",
  annualFormula: "round((674 * 0.01) * payableDays * 12, 2)",
};

export const safetyEarningsRuleTwoPercent: Rule = {
  ruleCode: "SAFETY_EARNINGS_TIER_TWO",
  name: "Safety Earnings – Tier Two",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Safety Earnings calculated at 2% of Basic pay per payable day. Formula: (Basic × 2%) × Payable Days.",
  condition: "payableDays > 0",
  monthlyFormula: "round((basic * 0.02) * payableDays, 2)",
  annualFormula: "round((basic * 0.02) * payableDays * 12, 2)",
};
export const safetyOfficerSpecialAllowanceRule: Rule = {
  ruleCode: "SAFETY_OFFICER_SPECIAL_ALLOWANCE",
  name: "Safety Officer Special Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Safety Officer special allowance calculated on a pro-rata basis at Rs.4000 per month divided by 26 working days.",
  condition: "payableDays > 0",
  monthlyFormula: "round((4000 / workingDaysInMonth) * payableDays, 0)",
};
