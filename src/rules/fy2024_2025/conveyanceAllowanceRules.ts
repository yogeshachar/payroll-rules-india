import { Rule } from "../../utils/types";

// Conveyance Allowance: grossEarnings * 10%
export const conveyanceGrossEarningsRule: Rule = {
  ruleCode: "CONVEYANCE_GROSS_10",
  name: "Conveyance Allowance - 10% of Gross Earnings",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Conveyance Allowance = grossEarnings * 10%",
  condition: "grossEarnings > 0",
  monthlyFormula: "round(grossEarnings * 0.1, 2)",
  annualFormula: "round(grossEarnings * 0.1 * 12, 2)",
};

// Conveyance Allowance: (1600 / working days in month) * payable days
export const conveyanceFixed1600Rule: Rule = {
  ruleCode: "CONVEYANCE_FIXED_1600",
  name: "Conveyance Allowance - Fixed ₹1600",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Conveyance Allowance = (1600 rupees / no. of working days in month) * payable days",
  condition: "workingDaysInMonth > 0 && payableDays > 0",
  monthlyFormula: "round((1600 / workingDaysInMonth) * payableDays, 2)",
  annualFormula: "round(((1600 / workingDaysInMonth) * payableDays) * 12, 2)",
};

// Conveyance Allowance: payable days * 23.08 rupees
export const conveyanceDaily23Rule: Rule = {
  ruleCode: "CONVEYANCE_DAILY_23",
  name: "Conveyance Allowance - ₹23.08 per day",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Conveyance Allowance = payable days * 23.08 rupees",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 23.08, 2)",
  annualFormula: "round(payableDays * 23.08 * 12, 2)",
};

// Conveyance Allowance: payable days * 75 rupees
export const conveyanceDaily75Rule: Rule = {
  ruleCode: "CONVEYANCE_DAILY_75",
  name: "Conveyance Allowance - ₹75 per day",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Conveyance Allowance = payable days * 75 rupees",
  condition: "payableDays > 0",
  monthlyFormula: "round(payableDays * 75, 2)",
  annualFormula: "round(payableDays * 75 * 12, 2)",
};

