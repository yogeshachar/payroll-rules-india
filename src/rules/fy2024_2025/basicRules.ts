import { Rule } from "../../utils/types";

export const basicRule: Rule = {
  ruleCode: "BASIC_DA",
  name: "Basic + Dearness Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: `
    Basic + DA calculation based on wage code:
    - If CTC <= 36,305 => Basic + DA = ₹18,135
    - If CTC > 36,305 => Basic + DA = 50% of CTC
  `,
  condition: "ctc > 0",
  // For monthly CTC input
  monthlyFormula: `
    round(
      ctc <= 36305 ? 18135 : (ctc * 0.5),
      2
    )
  `,
  // For annual CTC input
  annualFormula: `
    round(
      (ctc / 12) <= 36305
        ? (18135 * 12)
        : (ctc * 0.5),
      2
    )
  `,
};

// Basic calculation: Daily wages * worked days
export const basicDailyWagesRule: Rule = {
  ruleCode: "BASIC_DAILY_WAGES",
  name: "Basic (Daily Wages)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Basic = Daily wages (rate) * worked days (payable days)",
  condition: "dailyWages > 0 && payableDays > 0",
  monthlyFormula: "round(dailyWages * payableDays, 2)",
  annualFormula: "round(dailyWages * payableDays * 12, 2)",
};

// Basic calculation: grossEarnings * 50%
export const basicGrossEarnings50Rule: Rule = {
  ruleCode: "BASIC_GROSS_50",
  name: "Basic (50% Gross)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Basic = grossEarnings * 50%",
  condition: "grossEarnings > 0",
  monthlyFormula: "round(grossEarnings * 0.5, 2)",
  annualFormula: "round(grossEarnings * 0.5 * 12, 2)",
};

// Basic calculation: grossEarnings * 40%
export const basicGrossEarnings40Rule: Rule = {
  ruleCode: "BASIC_GROSS_40",
  name: "Basic (40% Gross)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Basic = grossEarnings * 40%",
  condition: "grossEarnings > 0",
  monthlyFormula: "round(grossEarnings * 0.4, 2)",
  annualFormula: "round(grossEarnings * 0.4 * 12, 2)",
};