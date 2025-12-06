import { Rule } from "../../utils/types";

// Medical Allowance: (1250 / no of working days in month) * payable days
export const medicalFixed1250Rule: Rule = {
  ruleCode: "MEDICAL_FIXED_1250",
  name: "Medical Allowance - Fixed ₹1250",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Medical Allowance = (1250 / no of working days in month) * payable days",
  condition: "workingDaysInMonth > 0 && payableDays > 0",
  monthlyFormula: "round((1250 / workingDaysInMonth) * payableDays, 2)",
  annualFormula: "round(((1250 / workingDaysInMonth) * payableDays) * 12, 2)",
};

// Medical Allowance: grossEarnings * 6.67%
export const medicalGrossEarningsRule: Rule = {
  ruleCode: "MEDICAL_GROSS_6_67",
  name: "Medical Allowance - 6.67% of Gross Earnings",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Medical Allowance = grossEarnings * 6.67%",
  condition: "grossEarnings > 0",
  monthlyFormula: "round(grossEarnings * 0.0667, 2)",
  annualFormula: "round(grossEarnings * 0.0667 * 12, 2)",
};

