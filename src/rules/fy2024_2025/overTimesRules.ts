import { Rule } from "../../utils/types";

export const overtimeHoursFixedRateRule: Rule = {
  ruleCode: "OT_HOURS_FIXED",
  name: "Overtime Hours Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Overtime allowance calculated at Rs.223.25 per overtime hour.",
  condition: "overtimeHours > 0",
  monthlyFormula: "round(overtimeHours * 223.25, 2)",
};

export const overtimeHoursDailyWageRule: Rule = {
  ruleCode: "OT_HOURS_DAILY_WAGE",
  name: "Overtime Hours Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description:
    "Overtime allowance calculated as (overtimeHours / 4) multiplied by daily wages.",
  condition: "overtimeHours > 0 && dailyWages > 0",
  monthlyFormula: "round((overtimeHours / 4) * dailyWages, 0)",
};
