import { Rule } from "../../utils/types";

// Other Allowances: IF((Basic Wage+Daily wage)>20,2000,ROUND((2000/26)*(Basic Wage+Daily wage),0))
export const otherAllowanceRule: Rule = {
  ruleCode: "OTHER_ALLOWANCE",
  name: "Other Allowances",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Other Allowances = IF((Basic Wage+Daily wage)>20,2000,ROUND((2000/26)*(Basic Wage+Daily wage),0))",
  condition: "basic > 0 || dailyWages > 0",
  monthlyFormula:
    "round((basic + dailyWages) > 20 ? 2000 : ((2000 / 26) * (basic + dailyWages)), 0)",
  annualFormula:
    "round(((basic + dailyWages) > 20 ? 2000 : ((2000 / 26) * (basic + dailyWages))) * 12, 0)",
};

export const otherDailyAllowanceRule: Rule = {
  ruleCode: "OTHER_DAILY_ALLOWANCE",
  name: "Other Allowance – Daily Rate (₹300)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Other allowance calculated at ₹300 per payable day",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 300, 2)",

  // Annual value should be derived by aggregating monthly payroll
  annualFormula: "round(payableDays * 300, 2)",
};

export const otherEarningsRule: Rule = {
  ruleCode: "OTHER_EARNINGS",
  name: "Other Earnings",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Other Earnings (manual or fixed amount)",
  condition: "true",
  monthlyFormula: "0",
  annualFormula: "0",
};
