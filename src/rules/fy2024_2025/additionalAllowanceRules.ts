import { Rule } from "../../utils/types";

// Additional Allowance: (2000/working days in month) * payable days
export const additionalAllowanceRule: Rule = {
  ruleCode: "ADDITIONAL_ALLOWANCE",
  name: "Additional Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Additional Allowance = (2000/working days in month) * payable days",
  condition: "workingDaysInMonth > 0 && payableDays > 0",
  monthlyFormula: "round((2000 / workingDaysInMonth) * payableDays, 2)",
  annualFormula: "round(((2000 / workingDaysInMonth) * payableDays) * 12, 2)",
};

