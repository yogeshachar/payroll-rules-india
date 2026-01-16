import { Rule } from "../../utils/types";

export const hraRule: Rule = {
  ruleCode: "HRA",
  name: "House Rent Allowance",
  category: "Earning",
  type: "Statutory",
  version: "FY2024-2025",
  description: "HRA: 40% (non-metro) or 50% (metro) of Basic",
  condition: "basic > 0",
  monthlyFormula: "round(basic * (isMetro ? 0.50 : 0.40), 2)",
  annualFormula: "round(basic * (isMetro ? 0.50 : 0.40) * 12, 2)",
};

// HRA: grossEarnings * 20%
export const hraGrossEarnings20Rule: Rule = {
  ruleCode: "HRA_GROSS_20",
  name: "HRA - 20% of Gross Earnings",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "HRA = grossEarnings * 20%",
  condition: "grossEarnings > 0",
  monthlyFormula: "round(grossEarnings * 0.2, 2)",
  annualFormula: "round(grossEarnings * 0.2 * 12, 2)",
};

// HRA: Basic * 10%
export const hraBasic10Rule: Rule = {
  ruleCode: "HRA_BASIC_10",
  name: "HRA - 10% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "HRA = Basic * 10%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.1, 2)",
  annualFormula: "round(basic * 0.1 * 12, 2)",
};

// HRA: Basic * 8%
export const hraBasic8Rule: Rule = {
  ruleCode: "HRA_BASIC_8",
  name: "HRA - 8% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "HRA = Basic * 8%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.08, 2)",
  annualFormula: "round(basic * 0.08 * 12, 2)",
};

// HRA: Basic * 30%
export const hraBasic30Rule: Rule = {
  ruleCode: "HRA_BASIC_30",
  name: "HRA - 30% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "HRA = Basic * 30%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.3, 2)",
  annualFormula: "round(basic * 0.3 * 12, 2)",
};

// HRA + Others: payable days * 52.963%
export const hraOthersRule: Rule = {
  ruleCode: "HRA_OTHERS",
  name: "HRA + Others",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "HRA + Others = payable days * 52.963%",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 0.52963, 2)",
  annualFormula: "round(payableDays * 0.52963 * 12, 2)",
};

export const hraDailyRateRule: Rule = {
  ruleCode: "HRA_DAILY_RATE",
  name: "HRA – Daily Rate (₹89.30)",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "House Rent Allowance calculated at ₹89.30 per payable day",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 89.3, 2)",
  annualFormula: "round(payableDays * 89.3, 2)",
};
