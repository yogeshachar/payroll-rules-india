import { Rule } from "../../utils/types";

// HO: Basic * 0.96%
export const optionalHolidayRule: Rule = {
  ruleCode: "OPTIONAL_HOLIDAY",
  name: "Optional Holiday Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Optional Holiday Allowance = Basic * 0.96%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0096, 2)",
  annualFormula: "round(basic * 0.0096 * 12, 2)",
};

