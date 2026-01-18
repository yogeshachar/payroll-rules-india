import { Rule } from "../../utils/types";

export const extraBasicRule: Rule = {
  ruleCode: "EXTRA_BASIC_GROSS",
  name: "Extra_Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Extra Basic = extraWorkedDays * Daily wages (rate)",
  condition: "extraWorkedDays > 0 && basic > 0",
  monthlyFormula: "round(dailyWages * extraWorkedDays, 2)",
  annualFormula: "round(dailyWages * extraWorkedDays * 12, 2)",
};
