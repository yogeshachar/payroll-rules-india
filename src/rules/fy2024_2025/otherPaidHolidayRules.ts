import { Rule } from "../../utils/types";

// Other PH: Basic * 0.96%
export const otherPaidHolidayRule: Rule = {
  ruleCode: "OTHER_PAID_HOLIDAY",
  name: "Other Paid Holidays",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Other Paid Holidays = Basic * 0.96%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0096, 2)",
  annualFormula: "round(basic * 0.0096 * 12, 2)",
};

