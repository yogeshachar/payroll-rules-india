import { Rule } from "../../utils/types";

// NH: 2.62% * Basic
export const nhBasic2_62Rule: Rule = {
  ruleCode: "NH_BASIC_2_62",
  name: "National Holiday Allowance - 2.62% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "National Holiday Allowance = 2.62% * Basic",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0262, 2)",
  annualFormula: "round(basic * 0.0262 * 12, 2)",
};

// NH: Basic * 0.961%
export const nhBasic0_961Rule: Rule = {
  ruleCode: "NH_BASIC_0_961",
  name: "National Holiday Allowance - 0.961% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "National Holiday Allowance = Basic * 0.961%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.00961, 2)",
  annualFormula: "round(basic * 0.00961 * 12, 2)",
};

// NH: Basic * 2.2%
export const nhBasic2_2Rule: Rule = {
  ruleCode: "NH_BASIC_2_2",
  name: "National Holiday Allowance - 2.2% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "National Holiday Allowance = Basic * 2.2%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.022, 2)",
  annualFormula: "round(basic * 0.022 * 12, 2)",
};

// NH: Basic * 0.0262
export const nhBasic0_0262Rule: Rule = {
  ruleCode: "NH_BASIC_0_0262",
  name: "National Holiday Allowance - 0.0262 of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "National Holiday Allowance = Basic * 0.0262",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0262, 2)",
  annualFormula: "round(basic * 0.0262 * 12, 2)",
};

// NH: no of holidays * Daily wages
export const nhHolidaysDailyWagesRule: Rule = {
  ruleCode: "NH_HOLIDAYS_DAILY",
  name: "National Holiday Allowance - Holidays * Daily Wages",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "National Holiday Allowance = no of holidays * Daily wages",
  condition: "noOfHolidays > 0 && dailyWages > 0",
  monthlyFormula: "round(noOfHolidays * dailyWages, 2)",
  annualFormula: "round(noOfHolidays * dailyWages * 12, 2)",
};

